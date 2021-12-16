import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';


import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

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
  tabBarLabel: "Home"
}

const CartNavigator = createStackNavigator({Cart});
CartNavigator.navigationOptions = {
  tabBarLabel: "Cart"
}

const OrdersNavigator = createStackNavigator({Orders});
OrdersNavigator.navigationOptions = {
  tabBarLabel: "Orders"
}

const SettingsNavigator = createStackNavigator({Settings}); 
SettingsNavigator.navigationOptions = {
  tabBarLabel: "Settings"
}


const AppNavigation = createBottomTabNavigator({
  CategoryNavigator,
  CartNavigator,
  OrdersNavigator,
  SettingsNavigator,
})

export default AppNavigation;