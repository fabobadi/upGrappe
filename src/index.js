import React, { Component } from 'react';
import { View, StyleSheet, BackAndroid } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Metrics from './metrics';
import Toolbar from './components/toolbar/';
import TabIcon from './components/tab-icon';
import Platform from './utils/platform';

import Activities from './components/Activities';
import Tutorial from './components/Tutorial';
import Vineyard from './components/Vineyard';
import User from './components/User';

// Development help
import Template from './utils/template';

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      loading: false,
      connected: false,
    };
  }

  componentDidMount() {
    if (Platform.Android && !this.state.mounted) {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
  }

  shouldComponentUpdate() {
    return false;
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
    const noSwipe = {
      panHandlers: null,
    };

    const padding = {
      sceneStyle: { paddingTop: Metrics.NAVBAR_HEIGHT },
    };

    const navbar = {
      navBar: Toolbar,
    };

    const tab = {
      ...padding,
      ...navbar,
      icon: TabIcon,
    };

    const noBack = {
      ...noSwipe,
      renderLeftButton: () => <View />,
    };

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            initial
            tabs
            hideNavBar
            default="Grappe"
            direction="vertical"
            tabBarStyle={styles.tabbar}
            {...noBack}
          >
            <Scene key="activities" component={Activities} title="Activities" image="tasks" {...tab} />
            <Scene key="vineyard" component={Vineyard} title="Vineyards" image="glass" {...tab} />
            <Scene key="user" component={User} title="User" image="user" {...tab} />
            <Scene key="tutorial" component={Tutorial} title="Tutorial" image="book" {...tab} />
          </Scene>

          {/* Set this to 'initial' to see it */}
          <Scene key="template" component={Template} title="Template" navigationBarStyle={styles.transparent} />
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
    paddingBottom: -10,
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
