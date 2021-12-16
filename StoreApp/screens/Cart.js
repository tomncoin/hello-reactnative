import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Cart extends React.Component {
    constructor(props){
      super(props);
    }
    static navigationOptions = {
        title: "Cart"
    };

    render(){
      return(
        <View>
          <Text>Cart</Text>
        </View>
      )
    }
}