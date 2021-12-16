import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Orders extends React.Component {
    constructor(props){
      super(props);
    }
    static navigationOptions = {
        title: "Orders"
    };
    render(){
      return(
        <View>
          <Text>Orders</Text>
        </View>
      )
    }
}