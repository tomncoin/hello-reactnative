import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

import SkiiImage from '../assets/ski-boots-64.png'; 
import SkiiImage2 from '../assets/ski.png'; 
import SkiiImage3 from '../assets/ski_blue.png'; 

export default class Categories extends React.Component {
  constructor(props){
    super(props);

    this.state={
      categories: [
        {id:1, name: 'Dung cu truot tuyet', image: SkiiImage},
        {id:2, name: 'Quan ao truot tuyet', image:SkiiImage2},
        {id:3, name: 'Kinh mu', image: SkiiImage3},
        {id:4, name: 'Kinh mu', image: SkiiImage3},
        {id:5, name: 'Kinh mu', image: SkiiImage3},
        {id:6, name: 'Kinh mu', image: SkiiImage3},
        {id:7, name: 'Kinh mu', image: SkiiImage3},
        {id:8, name: 'Kinh mu', image: SkiiImage3},
        {id:9, name: 'Kinh mu', image: SkiiImage3},
        {id:10, name: 'Khac', image:''},
      ]
    }
  }

  render(){
    const {categories} = this.state;
    return (
      <View>
        <FlatList data={categories} 
          renderItem={({item})=><CategoryListItem category={item}></CategoryListItem>}  
          keyExtractor={item=>item.id} 
          contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
        >
        </FlatList>
        {/* <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
          {
            categories.map(category=>(
              <CategoryListItem key={category.id} category={category}></CategoryListItem>
            ))
          }
         <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
          <CategoryListItem title="Skiiling" image={SkiiImage2}></CategoryListItem>
          <CategoryListItem title="Skiiling" image={SkiiImage3}></CategoryListItem>
          <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
          <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
