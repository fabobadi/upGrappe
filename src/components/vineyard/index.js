import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import { Colors } from '../../styles';
import { Divider } from 'react-native-material-design';

const vineyards = [
  {
    title: 'I - Tarapaca',
    content: [
      {
        name: 'Undurraga',
      },
    ],
  },
  {
    title: 'III - Atacama',
    content: [
      {
        name: 'Atacama',
      },
    ],
  },
  {
    title: 'V - Valparaiso',
    content: [
      {
        name: 'Atacama',
      },
    ],
  },
  {
    title: 'VI - O`Higgins',
    content: [
      {
        name: 'Maule',
      }, {
        name: 'Pio-Pio',
      }, {
        name: 'Lero-Lero',
      },
    ],
  },
  {
    title: 'VII - BióBió',
    content: [
      {
        name: 'BióBió',
      }, {
        name: 'Tabernero',
      }, {
        name: 'Lagos',
      },
    ],
  },
];

export default class Vineyard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderVineyard = this.renderVineyard.bind(this);
  }

  get dataSource() {
    return new ListView.DataSource({
      getSectionHeaderData: (data, sectionId) => data[sectionId],
      getRowData: (data, sectionId, rowId) => data[`${sectionId}:${rowId}`],
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
  }

  renderSectionHeader(region) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{region.title}</Text>
      </View>
    );
  }

  renderVineyard(vineyard) {
    return (
      <View style={styles.vineyardContainer}>
        <Text style={styles.vineyardText}>{vineyard.name}</Text>
      </View>
    );
  }

  render() {
    const data = {};
    const sectionIDs = [];
    const rowIDs = [];
    vineyards.forEach((vineyard, i) => {
      sectionIDs.push(i);
      data[i] = vineyard;
      rowIDs[i] = [];
      vineyard.content.forEach((vine, j) => {
        const identifier = `${i}:${j}`;
        rowIDs[i].push(j);
        data[identifier] = vine;
      });
    });

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.dataSource.cloneWithRowsAndSections(data, sectionIDs, rowIDs)}
          renderRow={this.renderVineyard}
          renderSectionHeader={this.renderSectionHeader}
          enableEmptySections
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: -10,
  },
  sectionContainer: {
    backgroundColor: Colors.RED,
    padding: 10,
  },
  sectionText: {
    color: Colors.WHITE,
  },
  vineyardContainer: {
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  vineyardText: {
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.GRAY,
  },
});
