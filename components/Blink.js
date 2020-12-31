import React, { Component} from 'react';
import { Text, View} from 'react-native';

class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showText : true
    };
    var taskToDo = () => {
      this.setState( previousState => {
        return {
          showText : !previousState.showText
        };
      });
    };
    const toBlink = 2000;
    setInterval(taskToDo, toBlink);
  }

  render() {
    let textDisplay = this.state.showText ? this.props.inputText : '';
    return (
      <Text> { textDisplay } </Text>
    );
  }
}

export default class TextBlink extends Component {
  render(){
    return (
      <View>
        <Blink inputText='Blink!'></Blink>
      </View>
    );
  }
}
