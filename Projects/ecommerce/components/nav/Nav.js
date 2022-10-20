import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler'

import style from './NavStyle';

const arr = ['Polo Shirts', 'Dress Shirts', 'Shorts', 'T-shirts'];

export class Nav extends Component {
  render() {
    return (
      <View style={style.nav}>
          <ScrollView horizontal={true}>
          {arr.map((item, index) => {
            return (
              <TouchableOpacity key= {index} style={style.touchNav}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
        </View>
    );
  }
}

export default Nav;
