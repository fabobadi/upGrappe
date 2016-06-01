import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Vineyard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Regions</Text>
        <Text>1. Vineyard</Text>
        <Text>1.1. Name</Text>
        <Text>1.2. Sectors quantity</Text>
        <Text>1.3. Click</Text>
      </View>
    );
  }
}
// TODO
// search bar
const styles = StyleSheet.create({
  container: {

  },
});
