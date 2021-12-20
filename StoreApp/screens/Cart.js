import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CartContext } from '../contexts/Cart';

export default class Cart extends React.Component {
    constructor(props){
      super(props);
    }
    static navigationOptions = {
        title: "Cart"
    };
    static contextType = CartContext;

    render(){
      return(
        <View>
          <CartContext.Consumer>
            {
              ({cartItems})=>(
                <Text>{`Cart (${cartItems.length})`}</Text>
              )
            }
          </CartContext.Consumer>
          {/* <Text>{this.context.cartItems.length}</Text> */}
        </View>
      )
    }
}