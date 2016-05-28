import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles';
import { Actions } from 'react-native-router-flux';

export default class Initial extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    setTimeout(() => Actions.intro(), 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Aca va la imagen principal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
