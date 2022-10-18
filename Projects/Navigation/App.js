import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNavigation from './ReactNavigation';
import MovieDetailsScreen from '../../MovieDetailsScreen/App';
import ColorApp from '../ColorViewer/components/ColorApp';
import Counter from '../../CounterProject/Counter';

const Stack = createNativeStackNavigator();


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DASHBOARD" component={ReactNavigation} />
          <Stack.Screen
            name="MovieDetailsScreen"
            component={MovieDetailsScreen}
          />
          <Stack.Screen name="COLOR VIEWER" component={ColorApp} />
          <Stack.Screen name="COUNTER" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
