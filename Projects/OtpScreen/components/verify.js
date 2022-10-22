import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import style from './styles';
import Input from './input/Input';

export class Verify extends Component {
  render() {
    return (
      <View>
        <View style={style.safeView}>
          <StatusBar barStyle="light-content" />
          <SafeAreaView style={style.safeArea}></SafeAreaView>
          <Text style={style.head}>Log into Saavn</Text>
        </View>
        <View style= {style.cont}>
            <Text style= {style.enter}>Enter your code</Text>
        </View>
        <Input></Input>
      </View>
    );
  }
}

export default Verify;
