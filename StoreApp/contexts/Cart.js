import  React, { Component } from "react";
import { View, Alert } from "react-native";

export const CartContext = React.createContext({
    addToCart: (product) => {},
    cartItems: [],
    demo: "xy"
});

export class CartProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            cartItems: []
        };

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart = (product) => {
        // console.log('Add success to cart.');
        // Alert.alert('Add success to cart.')

        const {cartItems} =this.state;
        const index = cartItems.map(function(x) {return x.id; }).indexOf(product.id);

        let list = [...cartItems, {
            ...product,
            quantity: 1
          }];

        if(index>-1){
            
            list = [
                ...cartItems.slice(0, index),
                {
                  ...cartItems[index],
                  quantity: cartItems[index].quantity+1
                },
                ...cartItems.slice(index+1)
              ] ;
            
        }
        
        this.setState({cartItems: list});
      };

    render(){
        return(
                <CartContext.Provider value={
                    {
                        addToCart: this.addToCart,
                        cartItems: this.state.cartItems,
                        demo: "xx123"
                    }
                }>
                    {this.props.children}
                </CartContext.Provider>
        )
    }
}