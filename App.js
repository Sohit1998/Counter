import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNavigation from './Projects/Navigation/ReactNavigation';
import MovieDetailsScreen from './Projects/MovieDetailsScreen/App';
import ColorApp from './Projects/ColorViewer/ColorApp';
import Counter from './Projects/CounterProject/Counter';
// import WebView from './Projects/webView/WebView';
import WebViewNative from './Projects/webView/WebView';
import Slider from './Projects/slider/Slider';
import SectionListComp from './Projects/sectionList/SectionListComp';

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
          <Stack.Screen name="WEBVIEW" component={WebViewNative} />
          <Stack.Screen name="SLIDER" component={Slider} />
          <Stack.Screen name="SECTIONLIST" component={SectionListComp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
