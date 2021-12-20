import React,{useContext} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

import { CartContext } from './contexts/Cart';
import CartLabel from './components/CartLabel';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const color ={
  Active: "#147efb",
  Inactive: "#ccc"
}

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
      );
    }
  }

const CategoryNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category:{
        screen: Category
    },
});

CategoryNavigator.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({focused})=>{
    return <Icon name="ios-home"
      size={24}
      color={focused?color.Active:color.Inactive}
      ></Icon>
  },
}




const CartNavigator = createStackNavigator({
  Cart:{
    screen: Cart,
    navigationOptions:{
  
    }
  },
});

CartNavigator.navigationOptions = {
  tabBarLabel:()=><CartLabel></CartLabel>
  ,
  tabBarIcon: ({focused})=>{
    return <Icon name={focused?"ios-cart":"ios-cart-outline"}
      size={24}
      ></Icon>
  },
}



const OrdersNavigator = createStackNavigator({Orders});
OrdersNavigator.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: ({focused})=>{
    return <Icon name={focused?"ios-person":"ios-person-outline"}
      size={24}
      ></Icon>
  },
}

const SettingsNavigator = createStackNavigator({Settings}); 
SettingsNavigator.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({focused})=>{
    return <Icon name={focused?"ios-settings":"ios-settings-outline"}
      size={24}
      ></Icon>
  },
}


const AppNavigation = createBottomTabNavigator({
  CategoryNavigator,
  CartNavigator,
  OrdersNavigator,
  SettingsNavigator,
})

export default AppNavigation;