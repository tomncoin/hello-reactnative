import  React, { Component } from "react";
import { View, Alert } from "react-native";

export const CartContext = React.createContext({
    addToCart: (product) => {},
    removeFromCart: (product)=>{},
    updateQuantity: (product)=>{}, 
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
        this.removeFromCart = this.removeFromCart.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this); 
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

    updateQuantity = (product) => {
        // console.log('Add success to cart.');
        // Alert.alert('Add success to cart.')

        const {cartItems} =this.state;
        const index = cartItems.map(function(x) {return x.id; }).indexOf(product.id);

        let list = [...cartItems, {
            ...product,
            quantity: 1
          }];

        if(index>-1){
            
            if(cartItems[index].quantity===1){
                list = [
                    ...cartItems.slice(0, index),
                    ...cartItems.slice(index+1)
                  ] ;
            }
            else
            {
                list = [
                    ...cartItems.slice(0, index),
                    {
                      ...cartItems[index],
                      quantity: cartItems[index].quantity-1
                    },
                    ...cartItems.slice(index+1)
                  ] ;
            }
            
            
        }
        
        this.setState({cartItems: list});
    };

    removeFromCart = (product) => {
        // console.log('Add success to cart.');
        // Alert.alert('removed.')

        const {cartItems} =this.state;
        const index = cartItems.map(function(x) {return x.id; }).indexOf(product.id);

        if(index>-1){
            
            list = [
                ...cartItems.slice(0, index),
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
                        removeFromCart: this.removeFromCart,
                        updateQuantity: this.updateQuantity,
                        cartItems: this.state.cartItems,
                        demo: "xx123"
                    }
                }>
                    {this.props.children}
                </CartContext.Provider>
        )
    }
}