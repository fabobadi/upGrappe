import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Scan extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Body>
            <Text style={{ fontSize: 20 }}>Take a photo!</Text>
            <Text>To start analyzing a vineyard canopy, please select the "Begin now!" button below.</Text>
            <Text>When you take a photo, please take the photo in the direction of the sun.</Text>
            <Text>You will receive two outputs. These , will be described hereinafter:</Text>
            <Text>
              <Icon name="scissors" size={20} style={styles.icon} />
              : This icon, represent the deshoje process, and the % number
              represent the volume of grapes exposed to the sun.
            </Text>
            <Text>
              <Icon name="leaf" size={20} style={styles.icon} />
              : This icon, represent the estimation process, and the % number
              represent the potential productivity of the vineyard.
            </Text>
          </Card.Body>
        </Card>
        <Card onPress={Actions.scan}>
          <Card.Media
            image={<Image source={require('./Img/tankingPhoto.jpg')} />}
            overlay
          >
            <Card.Body>
              <View style={styles.cardPhoto}>
                <Text style={styles.textPhoto}>Begin Now!</Text>
                <Icon style={styles.iconPhoto} name="camera" size={30} />
              </View>
            </Card.Body>
          </Card.Media>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  cardPhoto: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPhoto: {
    color: 'white',
    fontSize: 25,
  },
  iconPhoto: {
    color: 'white',
  },
});
