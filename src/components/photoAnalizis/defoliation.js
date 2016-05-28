import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Defoliation extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
