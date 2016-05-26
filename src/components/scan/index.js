import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import renderIf from 'render-if';

export default class SimpleScan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      areaVisibility: true,
    };
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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
        />
        {renderIf(this.state.areaVisibility)(
          <View style={styles.margin}>
            <Text style={{ color: 'white' }}>This area will be analyzed</Text>
          </View>
        )}
        <View style={styles.options}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="chevron-left" size={40} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture}>
            <Icon name="camera" size={40} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ areaVisibility: !this.state.areaVisibility })}>
            <Icon name="square-o" size={40} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 25,
    padding: 0,
    right: 20,
    left: 20,
    borderRadius: 0,
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  margin: {
    position: 'absolute',
    bottom: Dimensions.get('window').width / 2,
    left: 0,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(192, 57, 43,0.2)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
});
