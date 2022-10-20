import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './Header/Header';
import Nav from './nav/Nav';
import Products from './products/Products';

export class Main extends Component {
  render() {
    return (
      <View style= {{flex: 1,backgroundColor: 'white'}}>
        <Header></Header>
        <Nav></Nav>
        <Products></Products>
      </View>
    )
  }
}

export default Main;