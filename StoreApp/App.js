import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

import SkiiImage from './assets/ski-boots-64.png'; 
import SkiiImage2 from './assets/ski.png'; 
import SkiiImage3 from './assets/ski_blue.png'; 


export default function App() {
  return (
    <View>
      <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
        <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
        <CategoryListItem title="Skiiling" image={SkiiImage2}></CategoryListItem>
        <CategoryListItem title="Skiiling" image={SkiiImage3}></CategoryListItem>
        <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
        <CategoryListItem title="Skiiling" image={SkiiImage}></CategoryListItem>
      </ScrollView>
    </View>
  );
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
