import React, { Component} from 'react';
import { Text, View } from 'react-native';
import TextBlink from './Blink';

class Greeting extends Component {
  render(){
    let greetingString = `
      Hello ${this.props.name} !
    `
    return (
      <Text>{ greetingString }</Text>
    );
  }
}

export default class MultipleGreetings extends Component {
  render(){
    return (
      <View
        style= { {alignItems: 'center'}}
      >
      <Greeting name="Caro"></Greeting>
      <Greeting name="Test2"></Greeting>
      <TextBlink/>
      </View>
    )
  }
}
