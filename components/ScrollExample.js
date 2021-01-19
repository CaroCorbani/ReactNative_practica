import React, { Component } from 'react';
import { 
  ScrollView,
  Image, View, Text,
  Dimensions } from 'react-native';

  export default class ScrollExample extends Component {
    render() {
      let screenWidth = Dimensions.get('window').width;
      const imageSource = {
        uri: "https://cdn.pixabay.com/photo/2012/03/03/23/59/field-21708_960_720.jpg"
      }
      return(
        <ScrollView
          keyboardDismissMode = 'on-drag'
          contentContainerStyle= {{ marginTop: 30}}
        >
            <Image source= { imageSource }
                  style={{ width: screenWidth, height: screenWidth * 2448/ 3264, marginTop: 10}}
            >
            </Image>
            <Image source = {{uri:"https://cdn.pixabay.com/photo/2019/09/28/15/41/poppy-4511093_960_720.jpg"}}
            style={{ width: screenWidth, height: screenWidth * 2448/ 3264, marginTop: 50}}
            >
            </Image>
            <Image source = {{uri:"https://cdn.pixabay.com/photo/2014/01/27/21/32/hyacinth-253456_960_720.jpg"}}
            style={{ width: screenWidth, height: screenWidth * 2448/ 3264, marginTop: 50}}
            >
            </Image>
        </ScrollView>
      )
    }
  }
