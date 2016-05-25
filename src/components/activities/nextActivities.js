import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NextActivities extends Component {

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
              <View style={styles.cardDeshoje}>
                <Text style={{ color: 'white', fontSize: 25 }}>All Activities</Text>
                <Icon name="plus" size={20} style={styles.icon} />
              </View>
            </Card.Body>
          </Card.Media>
        </Card>
        <ScrollView>
          <Card>
            <Card.Body>
              <View style={styles.cardDeshoje}>
                <Text>Activitie #1</Text>
                <Icon name="scissors" size={20} style={styles.icon} >
                  <Text style={{ fontSize: 15 }}>  Deshoje</Text>
                </Icon>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <View style={styles.icon}>
                  <Icon name="camera" size={20} style={styles.icon} />
                  <Text> (15/50)</Text>
                </View>
                <View style={styles.icon}>
                  <Icon name="clock-o" size={25} style={styles.icon} />
                  <Text> 10:30</Text>
                </View>
              </View>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <View style={styles.cardDeshoje}>
                <Text>Activitie #2</Text>
                <Icon name="scissors" size={20} style={styles.icon} >
                  <Text style={{ fontSize: 15 }}>  Deshoje</Text>
                </Icon>
                <Icon name="leaf" size={20} style={styles.icon} >
                  <Text style={{ fontSize: 15 }}>  Estimation</Text>
                </Icon>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <View style={styles.icon}>
                  <Icon name="camera" size={20} style={styles.icon} />
                  <Text> (15/50)</Text>
                </View>
                <View style={styles.icon}>
                  <Icon name="clock-o" size={25} style={styles.icon} />
                  <Text> 09:00</Text>
                </View>
              </View>
            </Card.Body>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
