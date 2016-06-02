import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text, Dimensions, Modal, Image } from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import renderIf from 'render-if';
import { Divider, Checkbox } from 'react-native-material-design';
import Button from 'react-native-button';
import { Colors } from '../../styles';
const Orientation = require('react-native-orientation');

export default class SimpleScan extends Component {

  static get propTypes() {
    return {
      isSimple: PropTypes.any,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      path: '',
      squareAnalized: true,
      defoliation: true,
      estimation: true,
      settings: false,
      help: false,
    };
    this.takePicture = this.takePicture.bind(this);
    this.defoliationAnalizis = this.defoliationAnalizis.bind(this);
  }

  componentDidMount() {
    Orientation.lockToLandscape();
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  takePicture() {
    this.setState({ visible: !this.state.visible });
    this.camera.capture()
      .then((doc) => {
        this.defoliationAnalizis();
        this.setState({ path: doc });
      })
      .catch(err => console.error(err));
  }

  defoliationAnalizis() {
    setTimeout(() => this.setState({ visible: !this.state.visible }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.landscapeLeft}
        />
        {renderIf(this.state.settings)(
          <Modal
            animationType={'fade'}
            transparent
            visible={this.state.settings}
            onRequestClose={() => this.setState({ settings: false })}
          >
            <View style={styles.modalBackgroundStyle}>
              <View style={styles.innerContainerTransparentStyle}>
                <Text style={styles.modalTitle}>Settings</Text>
                <Divider />
                <View>
                  <Checkbox
                    checked={this.state.squareAnalized}
                    label="Square analizis"
                    onCheck={() => this.setState({ squareAnalized: !this.state.squareAnalized })}
                  />
                  <Checkbox
                    checked={this.state.estimation}
                    label="Estimation"
                    onCheck={() => this.setState({ estimation: !this.state.estimation })}
                  />
                  <Checkbox
                    checked={this.state.defoliation}
                    label="Defoliation"
                    onCheck={() => this.setState({ defoliation: !this.state.defoliation })}
                  />
                </View>
                <Divider />
                <Button
                  containerStyle={styles.ContainerButton}
                  style={{ fontSize: 18, color: Colors.BLUE }}
                  onPress={() => this.setState({ settings: false })}
                >
                  Close
                </Button>
              </View>
            </View>
          </Modal>
        )}
        {renderIf(this.state.squareAnalized)(
          <View style={styles.squareAnalized}>
            <Text style={{ color: 'white' }}>This area will be analyzed</Text>
          </View>
        )}
        {renderIf(this.state.help)(
          <Modal
            animationType={'fade'}
            transparent
            visible={this.state.help}
            onRequestClose={() => this.setState({ help: false })}
          >
            <View style={styles.modalBackgroundStyle}>
              <View style={styles.innerContainerTransparentStyle}>
                <Text style={styles.modalTitle}>Help</Text>
                <Divider />
                <View>
                  <Text>
                    To take the photo, stand at 1.5 mts ...
                  </Text>
                  <Image
                    source={require('./Img/help.png')}
                    style={styles.image}
                  />
                </View>
                <Divider />
                <Button
                  containerStyle={styles.ContainerButton}
                  style={{ fontSize: 20, color: Colors.BLUE }}
                  onPress={() => this.setState({ help: false })}
                >
                  Close
                </Button>
              </View>
            </View>
          </Modal>
        )}
        <View style={styles.kpi}>
          {renderIf(this.state.estimation)(
            <Text style={styles.icon}>
              <Icon name="scissors" size={20} />
              : 20%
            </Text>
          )}
          {renderIf(this.state.defoliation)(
            <Text style={styles.icon}>
              <Icon name="leaf" size={20} />
              : 8%
            </Text>
          )}
        </View>
        <View style={styles.help}>
          <TouchableOpacity onPress={() => this.setState({ help: true })}>
            <Icon name="question-circle" size={40} style={styles.iconBottom} />
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="chevron-left" size={40} style={styles.iconBottom} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture}>
            <Icon name="camera" size={40} style={styles.iconBottom} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ settings: true })}>
            <Icon name="cog" size={40} style={styles.iconBottom} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// TODO:
// https://github.com/yamill/react-native-orientationhttps://github.com/yamill/react-native-orientation
// Add question button
// Add delete last

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 25,
    right: 20,
    left: 20,
    alignItems: 'center',
  },
  kpi: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  help: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  iconBottom: {
    color: 'white',
  },
  squareAnalized: {
    position: 'absolute',
    bottom: Dimensions.get('window').width / 4,
    left: 0,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(192, 57, 43,0.2)',
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width / 2,
  },
  modalBackgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainerTransparentStyle: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    width: Dimensions.get('window').width / 2,
  },
  modalTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ContainerButton: {
    alignItems: 'center',
    marginTop: 5,
  },
  modalContent: {
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.4,
    height: 100,
  },
});
