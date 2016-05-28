import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.icon}>Aca va el icono</Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => Actions.main()}>
            <Text style={{ fontSize: 25, color: Colors.WHITE }}>
              Log In
              <Icon name="chevron-circle-right" size={25} style={styles.icon} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.scan({ isSimple: true })}>
            <Text
              style={styles.button}
            >
              Simple Scan
              <Icon name="chevron-circle-right" size={25} style={styles.icon} />
            </Text>
          </TouchableOpacity>
        </View>
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
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    height: 50,
    width: 280,
    backgroundColor: 'rgb(211, 84, 0)',
  },
  icon: {
    marginBottom: 52,
  },
  right: {

  },
});
