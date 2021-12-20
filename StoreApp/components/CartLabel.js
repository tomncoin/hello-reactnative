import { reduce } from 'lodash';
import React,{useContext} from 'react';
import { Text, StyleSheet} from 'react-native';
import { CartContext } from '../contexts/Cart';

export default function CartLabel(){
    // this.context = useContext(CartContext);

    // return <Text>Cart</Text>
    return <CartContext.Consumer>
    {
      ({cartItems})=>(
        <Text style={styles.cart}>{`Cart (${cartItems.length})`}</Text>
      )
    }
  </CartContext.Consumer>
}

const styles=StyleSheet.create({
    cart:{
        paddingBottom: 6,
        fontSize: 10,
        textAlign: 'center'
    }
})