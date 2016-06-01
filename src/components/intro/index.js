import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Modal, Image } from 'react-native';
import { Colors } from '../../styles';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import renderIf from 'render-if';
import { Divider } from 'react-native-material-design';

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      login: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../Img/logo.png')}
          style={styles.logo}
        />
        {renderIf(this.state.visible)(
          <View>
            <Button
              containerStyle={styles.ContainerButton}
              style={{ fontSize: 20, color: Colors.MAIN }}
              onPress={() => this.setState({ login: true })}
            >
              Log in
              <Icon name="chevron-right" size={25} color={Colors.MAIN} />
            </Button>
            <Button
              containerStyle={styles.ContainerButton}
              style={{ fontSize: 20, color: Colors.MAIN }}
              onPress={() => Actions.scan({ isSimple: true })}
            >
              Simple Scan
              <Icon name="chevron-right" size={25} color={Colors.MAIN} />
            </Button>
          </View>
        )}
        {renderIf(this.state.login)(
          <Modal
            animationType={'fade'}
            transparent
            visible={this.state.login}
            onRequestClose={() => this.setState({ login: false })}
          >
            <View style={styles.modalBackgroundStyle}>
              <View style={styles.innerContainerTransparentStyle}>
                <Text style={styles.modalTitle}>Log In</Text>
                <Divider />
                <View>
                  <Text>
                    Login/register
                  </Text>
                </View>
                <Divider />
                <Button
                  containerStyle={styles.modalButton}
                  style={{ fontSize: 20, color: 'white' }}
                  onPress={() => {
                    this.setState({ login: false });
                    Actions.main();
                  }}
                >
                  Login
                </Button>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MAIN,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ContainerButton: {
    marginBottom: 10,
    padding: 10,
    height: 50,
    width: Dimensions.get('window').width * 0.75,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  icon: {
    alignSelf: 'center',
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
    width: Dimensions.get('window').width * 0.6,
  },
  modalTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalButton: {
    alignItems: 'center',
    marginTop: 5,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: Colors.BLUE,
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
