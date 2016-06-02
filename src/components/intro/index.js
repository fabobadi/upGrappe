import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Colors } from '../../styles';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import renderIf from 'render-if';
import * as Animatable from 'react-native-animatable';

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      button: false,
      login: false,
      user: '',
      password: '',
    };
    this.presentLogo = this.presentLogo.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 1500);
    setTimeout(() => this.setState({ button: true }), 2500);
  }

  presentLogo() {
    return (
      <Animatable.View
        style={styles.containerImage}
        animation={this.state.visible ? 'fadeOut' : null}
      >
        <Image
          source={require('../../Img/logo.png')}
          style={styles.logo}
        />
      </Animatable.View>
    );
  }

  showButton() {
    return (
      <View style={styles.container}>
        <Animatable.View
          style={styles.containerImage}
          animation={this.state.visible ? 'slideInDown' : null}
        >
          <Image
            source={require('../../Img/logo.png')}
            style={styles.logo}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.buttons}
          animation="slideInUp"
        >
          <Button
            containerStyle={styles.ContainerButton}
            style={{ fontSize: 20, color: Colors.MAIN }}
            onPress={() => Actions.login()}
          >
          Log in
            <Icon name="chevron-right" size={25} color={Colors.MAIN} />
          </Button>
          <Button
            containerStyle={styles.ContainerButton}
            style={{ fontSize: 20, color: Colors.MAIN }}
            onPress={() => Actions.scan()}
          >
          Simple Scan
            <Icon name="chevron-right" size={25} color={Colors.MAIN} />
          </Button>
        </Animatable.View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {renderIf(!this.state.button)(
          this.presentLogo
        )}
        {renderIf(this.state.button)(
          this.showButton
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
    justifyContent: 'center',
  },
  containerImage: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
  },
  buttons: {
    marginTop: 50,
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
});
