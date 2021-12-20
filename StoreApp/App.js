import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import axios from 'axios';
import { CartProvider } from './contexts/Cart';

import AppNavigator from './AppNavigator';


axios.defaults.baseURL = "http://192.168.0.133:3000";

const AppContainer = createAppContainer(AppNavigator);
 
import Categories from './screens/Categories';

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
