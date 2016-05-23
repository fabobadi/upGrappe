import React, {Proptypes, Component, View } from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, BackAndroid } from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'


import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <Scene key="root">
            <Scene key="pageOne" component={PageOne} title="PageOne" initial/>
            <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    backgroundColor: '#F9F9F9',
  },
  transparent: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  title: {
    color: 'white',
  },
});
