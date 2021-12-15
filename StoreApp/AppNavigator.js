import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Categories from './screens/Categories';
import Category from './screens/Category';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category:{
        screen: Category
    },
});

export default AppNavigator;