import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products:[]
    };
  }
  static navigationOptions = ({navigation})=>{
    return {
      title: navigation.getParam('categoryName'),
      categoryId: navigation.getParam('categoryId'),
    };
  };

  componentDidMount(){
    const {navigation} = this.props;
    // console.error(navigation.state.params.categoryId);

    axios.get("http://192.168.0.136:3000/products?category="+navigation.state.params.categoryId)
    .then(res=>{
      this.setState({
        products: res.data
      })
    })
    .catch(error=>{
      console.error(error)
    });
  }

  render(){
    const {products} = this.state;
    return (
      <FlatList data={products}
        numColumns={2}
        renderItem={({item})=> 
          <View style={styles.wrapper}>
            <ProductListItem product={item}></ProductListItem>
          </View>
        }
        keyExtractor={item=>item.id} 
        contentContainerStyle={styles.container}
        >
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8,
  }
});
