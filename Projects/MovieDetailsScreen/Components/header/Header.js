import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import style from './headerStyle';

export class Header extends Component {
  render() {
    return (
      <View style= {style.header}>
        <View>
            <Image
                style={{width: 15, height: 15}}
                source={{uri:'https://img.icons8.com/material-outlined/24/000000/less-than.png'}} >
            </Image>
        </View>
        <View>
            <Text>Product Details</Text>
        </View>
        <View>
            <Image
                style={{width: 20, height: 20}}
                source= {{uri: 'https://img.icons8.com/sf-ultralight/25/000000/bookmark-ribbon.png'}}></Image>
        </View>
      </View>
    )
  }
}

export default Header;

