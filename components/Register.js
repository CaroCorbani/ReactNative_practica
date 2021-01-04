import React, { Component} from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, Alert}from 'react-native';
import Button from 'react-native-button';

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      typedText: 'Your Email',
      typedPassword: '',

    };
  }


  _onPressButton = () =>{
    Alert.alert("Test: Ok!");
    }

  render(){
    return (
      <View  style={ styles.container }>
      <Text style={{marginLeft:20,marginBottom: 20, fontSize: 40}}>Welcome</Text>
        <TextInput style={ styles.inputText }
        keyboardType = 'email-address'
        placeholder = 'Enter your email'
        autoFocus = {true}
        onChangeText = {
          (text) => {
            this.setState(
              (previousState) => {
                return {
                  typedText : text
                };
              }
            );
          }
          }
        />
        <Text style={{marginLeft:20}}>{this.state.typedText}</Text>
        <TextInput style={ styles.inputText }
        keyboardType = 'default'
        placeholder = 'Enter your password'
        secureTextEntry = {true}
        onSubmitEditing = { Keyboard.dismiss}
        onChangeText = {
          (text) => { this.setState(() =>{
            return {
              typedPassword : text
            };
          })}}
        />

          <Button style={ styles.btnC}
          onPress={ this._onPressButton }
            title="Button"
            color= 'white'
          >
          SIGN UP
          </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:'50%'
  },
  inputText: {
    height: 40,
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  btnC : {
    width: '50%',
    marginTop:20,
    alignSelf: 'center',
    backgroundColor: `#cd5c5c`,
    padding: 10,
    borderRadius: 20,
    color:'white'
  }
});
