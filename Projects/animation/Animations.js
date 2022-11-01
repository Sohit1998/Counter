import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Animations(props) {
  const {navigation} = props;
  return (
    <View style={style.buttonCont}>
      <TouchableOpacity
        style={style.link}
        onPress={() => navigation.navigate('ANIMATIONONE')}>
        <Text style={style.btnText}>AnimationOne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.link}
        onPress={() => navigation.navigate('ANIMATIONTWO')}>
        <Text style={style.btnText}>AnimationTwo</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  link: {
    alignItems: 'center',
    width: 200,
    // borderWidth: 2,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(59,107,246)',
    textDecorationLine: 'underline',
  },
  buttonCont: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 20,
    // borderWidth: 2,
    // margin: 40,
    // padding: 20,
    backgroundColor: '#CCF381',
    // borderRadius:10,
  },
});
