import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView ,Button, TouchableOpacity} from 'react-native';
import { CartContext } from '../contexts/Cart';
import CartListItem from '../components/CartListItem';
import { TextInput } from 'react-native-gesture-handler';

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
               <ScrollView style={styles.content}>

                {cartItems.map(product=>(
                  <CartListItem product={product} key={product.id} ></CartListItem>
                )
                )}

                <View style={styles.totalSection}>
                  <Text style={styles.totalSectionTitle}>Totals</Text>
                  <View style={styles.subTotalRow}>
                    <Text style={styles.subTotalTitle}>Sub Total</Text>
                    <View style={styles.devider}></View>
                    <Text style={styles.subTotalAmount}>$300.00</Text>
                  </View>
                  <View style={styles.subTotalRow}>
                    <Text style={styles.subTotalTitle}>Shipping</Text>
                    <View style={styles.devider}></View>
                    <Text style={styles.subTotalAmount}>$10.00</Text>
                  </View>
                  <View style={styles.couponSection}>
                    <TextInput style={styles.placeholder}
                    placeholder="Enter Voucher Code"></TextInput>
                  </View>
                  {/* <TouchableOpacity style={styles.button}>
                    <Text>Check Out</Text>
                  </TouchableOpacity> */}
                  <View style={styles.button}>
                    <Button title='Check out'></Button>
                  </View>
                </View>
                </ScrollView>
              )
            }
          </CartContext.Consumer>
          {/* <Text>{this.context.cartItems.length}</Text> */}
        </View>
      )
    }

}

const styles= StyleSheet.create({
  content:{
    // marginHorizontal:  29,
    paddingBottom: 32,
    paddingLeft: 16, paddingRight: 16,
  },
  product:{
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  totalSection:{
    marginTop:32,
    paddingBottom:32,
  },
  totalSectionTitle:{
    fontSize: 25,
    fontWeight:"700",
    paddingBottom:20,
  },
  devider:{
    height:1,
    borderColor: "#dddddd",
    borderStyle: "dashed",
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    flex: 1,
    marginHorizontal:16,
    marginTop: 16
  },
  subTotalRow:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical:10,
  },
  subTotalTitle:{
    fontSize:18,
  },
  subTotalAmount:{
    fontSize:20,
    fontWeight:"700",
  },
  couponSection:{
    height:52,
    borderRadius:50,
    borderColor: "rgba(0,0,0,0.15)",
    borderStyle:"solid",
    borderWidth:1,
    paddingHorizontal:29,
    marginTop:32,
  },
  placeholder:{
    opacity: 0.6,
    color:"#707070",
    fontWeight:"400",
    fontSize:16,
    lineHeight:32,
    flex:1

  },
  button:{
    marginTop:32,
    alignSelf:"center",
    // marginHorizontal:36,
    // width:150,
    // borderRadius:10,
    // lineHeight:32,
    // alignItems:"center"
  }
});