import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../ecommerce/components/Main';
import style from './AppStyle';

const Tab = createBottomTabNavigator();

class Home extends Component {
  render() {
    return alert('empty');
  }
}
class Categories extends Component {
  render() {
    return alert('empty');
  }
}
class MyCart extends Component {
  render() {
    return alert('empty');
  }
}
class Wishlist extends Component {
  render() {
    return alert('empty');
  }
}
class Acount extends Component {
  render() {
    return alert('empty');
  }
}

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Image
                  source={require('./components/assets/home.png')}
                  style={style.homeImg}
                />
              ),
            }}
            name="Men Clothing"
            component={Main}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'categories',
              tabBarIcon: () => (
                <Image
                  source={require('./components/assets/options-lines.png')}
                  style={style.homeImg}
                />
              ),
            }}
            name="categories"
            component={Categories}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
