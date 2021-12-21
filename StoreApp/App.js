import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import axios from 'axios';
import mongoose from 'mongoose';

import AppNavigator from './AppNavigator';
import { CartProvider } from './contexts/Cart';
import Categories from './screens/Categories';


axios.defaults.baseURL = "http://192.168.0.133:3000";

const AppContainer = createAppContainer(AppNavigator);

// mongoose.connect("mongodb+srv://hellonode:xyz123@cluster0.awdsq.mongodb.net/nodejs-demo?retryWrites=true&w=majority");

export default class App extends React.Component {
  constructor(props){
    super(props); 
  }
  
  render(){
    

    return (
      <CartProvider>
        <AppContainer>
        </AppContainer>
      </CartProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
