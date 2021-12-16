import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Settings extends React.Component {
    constructor(props){
      super(props);
    }
    static navigationOptions = {
        title: "Settings"
    };
    render(){
      return(
        <View>
          <Text>Settings</Text>
        </View>
      )
    }
}