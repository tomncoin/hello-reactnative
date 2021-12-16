import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products:[
        {
          "id": "a81bf7e1-4fe5-4948-b2a6-19376ab273a4",
          "name": "Vermouth - White, Cinzano",
          "description": "nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
          "images": [
            {
              url:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
          ],
          "price": 87
          },
          {
          "id": "79321185-a0ac-4b9c-b921-82ba57f57934",
          "name": "Mcguinness - Blue Curacao",
          "description": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat",
          "images": [
            {
              url:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
          ],
          "price": 11
          },
          {
          "id": "ddaaa00a-37b5-4321-b7a4-fdbdb80485a9",
          "name": "Pasta - Angel Hair",
          "description": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
          "images": [
            {
              url:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
          ],
          "price": 31
          },
          {
          "id": "d019c1a9-dbda-4661-86ea-467ff73fbd9c",
          "name": "Cookies - Assorted",
          "description": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
          "images": [
            {
              url:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
          ],
          "price": 29
          },
          {
          "id": "fc0c551f-3cc2-4a1c-bbad-ec2e8b97b161",
          "name": "Allspice - Jamaican",
          "description": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
          "images": [
            {
              url:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
          ],
          "price": 10
          },
      ]
    };
  }
  static navigationOptions = ({navigation})=>{
    return {
      title: navigation.getParam('categoryName'),
    };
  };

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
