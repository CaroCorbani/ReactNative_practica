import React, { Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class StyleExample extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <View style={ styles.viewTop}>
          <Text style={ styles.firstText }> Top Text </Text>
        </View>
        <View style={ styles.viewBottom}>
          <Text style={ styles.firstText }> Bottom Text </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  viewTop: {
    flex: 50,
    backgroundColor:`#e9967a`,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '50%'
  },
  viewBottom:{
    flex: 50,
    backgroundColor: `#8b008b`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText: {
    color: 'white'
  }
});
