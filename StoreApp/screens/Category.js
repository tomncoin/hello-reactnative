import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Category extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {categories} = this.state;
    return (
      <View>
        Category
      </View>
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
