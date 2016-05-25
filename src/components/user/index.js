import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>User info</Text>
        <Text>1. Name, mail, photo</Text>
        <Text>2. Role (admin, writer, reader)</Text>
        <Text>3. Suspribted vineyards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
