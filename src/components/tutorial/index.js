import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Colors } from '../../styles';

import Doc from './documentation';
import Book from './book';
import Video from './video';

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ScrollableTabView
            tabBarBackgroundColor={Colors.MAIN}
            tabBarActiveTextColor={Colors.WHITE}
            tabBarUnderlineColor={Colors.RED}
          >
            <Video tabLabel="Video" />
            <Book tabLabel="Book" />
            <Doc tabLabel="Documentation" />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
