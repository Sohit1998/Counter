import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import style from './HeaderStyle';



export class Header extends Component {
  render() {
    return (
      <View style= {style.headerWrapper}>
        <View style= {style.headerLeftCont}>
          <Text style= {style.itemsText}>195 items</Text>
        </View>
        <View style= {style.headerRightCont}>
          <View style= {style.sortCont}>
            <Image style= {style.img} source={require('../assets/sort.png')} />
            <Text style= {style.sortFilterText}>SORT</Text>
          </View>
          <View style= {style.verticalLine}></View>
          <View style= {style.filterCont}>
            <Image style= {style.img} source={require('../assets/filter.png')} />
            <Text style= {style.sortFilterText}>FILTER</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
