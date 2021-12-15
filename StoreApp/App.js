import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

import Categories from './screens/Categories';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <AppContainer></AppContainer>
      // <View>
      //   <Text>xx</Text>
      // </View>
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
