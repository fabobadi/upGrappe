import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import { Colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Login extends Component {

  static get propTypes() {
    return {
      // data: PropTypes.array,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../Img/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.input} >
          <TextInput
            style={styles.inputText}
            placeholder="UserName"
            onChangeText={(user) => this.setState({ user })}
            value={this.state.user}
            underlineColorAndroid={Colors.WHITE}
            selectionColor={Colors.RED}
            selectTextOnFocus
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
            selectionColor={Colors.RED}
            underlineColorAndroid={Colors.WHITE}
            selectTextOnFocus
          />
        </View>
        <View>
          <Button
            containerStyle={styles.ContainerButton}
            style={styles.ButtonLogin}
            onPress={() => Actions.main()}
          >
            Log in
            <Icon name="chevron-right" size={25} color={Colors.MAIN} />
          </Button>
          <Button
            style={styles.ButtonRegister}
            onPress={() => Actions.main()}
          >
            No account yet? Create one
          </Button>
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
  containerImage: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  containerInput: {
    marginTop: 50,
    backgroundColor: Colors.WHITE,
    marginRight: 20,
    marginLeft: 20,
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
  },
  icon: {
    color: Colors.white,
  },
  input: {
    width: Dimensions.get('window').width * 0.65,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputText: {
    color: Colors.WHITE,
    borderColor: Colors.WHITE,
    fontSize: 20,
    marginTop: -15,
  },
  ContainerButton: {
    marginTop: 20,
    padding: 10,
    height: 50,
    width: Dimensions.get('window').width * 0.75,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  ButtonLogin: {
    fontSize: 20,
    color: Colors.MAIN,
  },
  ButtonRegister: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.WHITE,
  },
});
