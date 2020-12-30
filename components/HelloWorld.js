import React, { Component} from 'react';
import { Text, Image } from 'react-native';

export default class HelloWorld extends Component {
  render(){
    let greeting = `
                Hola!`;
    const imageSource = {
      uri: "https://cdn.pixabay.com/photo/2012/03/03/23/59/field-21708_960_720.jpg"
    }
    return (
    //  <Text>{ greeting}</Text>
      <Image source={ imageSource }
              style={ {width: 430, height : 660}}
      >
      </Image>
    );
  }
}
