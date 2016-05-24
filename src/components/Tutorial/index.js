import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default class MinTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <Text>Tutorial</Text>
        <Text>1. Video</Text>
        <Text>2. Documentation</Text>
        <Text>2. Mini-Book</Text>
      </View>
    );
  }
}
