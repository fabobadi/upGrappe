import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Colors } from '../../styles';

import Defoliation from './defoliation.js';
import Estimation from './estimation.js';

export default class PhotoAnalizis extends Component {

  static get propTypes() {
    return {
      // data: PropTypes.array,
    };
  }

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
          <Defoliation tabLabel="Defoliation" />
          <Estimation tabLabel="Estimation" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
