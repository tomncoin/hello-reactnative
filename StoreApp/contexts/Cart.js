import  React, { Component } from "react";
import { View, Alert } from "react-native";

export const CartContext = React.createContext({
    addtoCartClick: (product) => {},
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

        this.addtoCartClick = this.addtoCartClick.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    addtoCartClick(product){
        Alert.alert('Add success to cart.')
        
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });

    }

    addToCart = (product) => {
        console.log('Add success to cart.');
        Alert.alert('Add success to cart.')

        const list = [...this.state.cartItems, product];
        this.setState({cartItems: list});
      };

    render(){
        return(
                <CartContext.Provider value={
                    {
                        addToCart: this.addToCart,
                        addtoCartClick: this.addtoCartClick,
                        cartItems: this.state.cartItems,
                        demo: "xx123"
                    }
                }>
                    {this.props.children}
                </CartContext.Provider>
        )
    }
}