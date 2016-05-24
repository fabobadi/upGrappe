import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MinTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Media
            image={<Image source={require('./Img/poda.jpg')} />}
            overlay
          >
            <Card.Body>
              <Text style={{ color: 'white', fontSize: 25 }}>All Activities</Text>
            </Card.Body>
          </Card.Media>
        </Card>
        <Card>
          <Card.Body>
            <View style={styles.cardDeshoje}>
              <Text>Activitie #1</Text>
              <Icon name="scissors" size={20} style={styles.icon} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View style={styles.icon}>
                <Icon name="camera" size={20} style={styles.icon} />
                <Text> (0/50)</Text>
              </View>
              <View style={styles.icon}>
                <Icon name="clock-o" size={25} style={styles.icon} />
                <Text> 11:00</Text>
              </View>
            </View>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <View style={styles.cardDeshoje}>
              <Text>Activitie #1</Text>
              <Icon name="scissors" size={20} style={styles.icon} />
              <Icon name="leaf" size={20} style={styles.icon} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View style={styles.icon}>
                <Icon name="camera" size={20} style={styles.icon} />
                <Text> (0/50)</Text>
              </View>
              <View style={styles.icon}>
                <Icon name="clock-o" size={25} style={styles.icon} />
                <Text> 11:00</Text>
              </View>
            </View>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <View style={styles.cardDeshoje}>
              <Text>Activitie #1</Text>
              <Icon name="scissors" size={20} style={styles.icon} />
              <Icon name="leaf" size={20} style={styles.icon} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View style={styles.icon}>
                <Icon name="camera" size={20} style={styles.icon} />
                <Text> (0/50)</Text>
              </View>
              <View style={styles.icon}>
                <Icon name="clock-o" size={25} style={styles.icon} />
                <Text> 11:00</Text>
              </View>
            </View>
          </Card.Body>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardDeshoje: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
});
