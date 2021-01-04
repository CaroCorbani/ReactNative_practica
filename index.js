import { registerRootComponent  } from 'expo';
import React, { Component} from 'react';
import HelloWorld from './components/HelloWorld';
import MultipleGreetings from './components/Greetings';
import App from './App';
import TextBlink from './components/Blink';
import StyleExample from './components/StyleExample'
import { StyleSheet, Text, View} from 'react-native';


registerRootComponent(StyleExample);
