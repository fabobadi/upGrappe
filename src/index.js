import React, { Component } from 'react';
import {View, StyleSheet, BackAndroid } from 'react-native';
import {Scene,  TabBar, Router, Actions } from 'react-native-router-flux';

import Platform from './utils/platform';

import Activities from './components/Activities';
import Analytics from './components/Analytics';

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (Platform.Android && !this.state.mounted) {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
  }

  goBack() {
    try {
      Actions.pop();
      return true;
    } catch (err) {
      BackAndroid.exitApp();
      return true;
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            initial
            tabs
            hideNavBar
            default="atlasses"
            direction="vertical"
          >
            <Scene key="activities" component={Activities} title="Activities"/>
            <Scene key="analytics" component={Analytics} title="Analytics"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    backgroundColor: '#F9F9F9'
  },
  transparent: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent'
  },
  title: {
    color: 'white'
  }
});
