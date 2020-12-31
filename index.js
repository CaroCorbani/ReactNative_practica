import { registerRootComponent  } from 'expo';
import React, { Component} from 'react';
import HelloWorld from './components/HelloWorld';
import MultipleGreetings from './components/Greetings';
import App from './App';
import TextBlink from './components/Blink';
import { StyleSheet, Text, View} from 'react-native';

export default class Home extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text style={ styles.firstText }> Text Style </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight:  10,
    backgroundColor: '#595b83',
    borderWidth: 2,
    borderColor: '#060930',
  },
  firstText: {
    margin: 5, color: '#f4abc4'
  }
});

registerRootComponent(Home);
