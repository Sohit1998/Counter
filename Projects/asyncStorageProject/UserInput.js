import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const UserInput = ({img, placeholder, index, onChangeInput, fkeys}) => {
  return (
    <View key={index} style={style.componentView}>
      <View style={style.imgView}>
        <Image style={style.logo} source={{uri: img}} />
      </View>

      <TextInput style={style.textinput} placeholder={placeholder} onChangeText= {(text) => onChangeInput(text,fkeys)}></TextInput>
    </View>
  );
};

export default UserInput;

const style = StyleSheet.create({
  componentView: {
    flexDirection: 'row',
    borderRadius: 30,
    width: 300,
    borderWidth: 1,
    height: 60,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(255,255,255)',
  },
  imgView: {
    width: 18,
    height: 18,
    marginHorizontal: 12,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  textinput: {
    fontSize: 16,
  },
});
