import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Counter from './components/Counter';
import { StyleSheet } from 'react-native';

class HelloWorldApp extends Component {
  constructor(){
    super()
    this.a = 10
    this.state = {counter: 10,abc:'ishita' }
  }
  render() {
    return (
      <View
        style= {styles.main}>
        <Text style= {styles.counterHead}>REACT  COUNTER</Text>

        <Counter  value= {this.counter}></Counter>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    paddingTop: 70,
    flex: 1,
    alignItems: 'center',
  },
  counterHead: {
    fontSize: 40
  }

   
});

export default HelloWorldApp;