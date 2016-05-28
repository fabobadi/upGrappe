import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class PhotoAnalizis extends Component {

  static get propTypes() {
    return {
      // data: PropTypes.array,
    };
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
