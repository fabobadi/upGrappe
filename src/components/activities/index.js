import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Colors } from '../../styles';

import AllActivities from './allActivities';
import NextActivities from './nextActivities';
import Scan from './simpleScan';

export default class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          tabBarBackgroundColor={Colors.MAIN}
          tabBarActiveTextColor={Colors.WHITE}
          tabBarUnderlineColor={Colors.RED}
        >
          <Scan tabLabel="Simple Scan" />
          <NextActivities tabLabel="Next activities" />
          <AllActivities tabLabel="All activities" />
        </ScrollableTabView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
