import {Text, View, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import React, {Component, useEffect} from 'react';
import style from './ReactNavigationStyle';
const  ReactNavigation = (props) =>  {
  
    const { navigation } = props;

    // useEffect(() => {
      // checkData()
      async function logInBtnHandler(){
          try {
              const value = await AsyncStorage.getItem('userDetails');
              let newData = await (JSON.parse(value))
              if(newData) {
                  navigation.navigate('ASYNCHOME')
              }else{
                navigation.navigate("LOGIN")
              }
            } catch(e) {
              console.error(e);
            }
      }
    // })

    return (
      <ScrollView>
      <View style={style.primaryCont}>
        {/* <View style={style.headCont}>
          <Text style={style.heading}>DASHBOARD</Text>
        </View> */}
        <View style={style.buttonCont}>
          <TouchableOpacity
            style={style.link}
            onPress={() =>
              navigation.navigate('MovieDetailsScreen')
            }>
            <Text style={style.btnText}>MovieDetailsScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('COLOR VIEWER')}>
            <Text style={style.btnText}>ColorApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('COUNTER')}>
            <Text style={style.btnText}>Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('WEBVIEW')}>
            <Text style={style.btnText}>WebView</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('SLIDER')}>
            <Text style={style.btnText}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('SECTIONLIST')}>
            <Text style={style.btnText}>SectionList</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('CLIPBOARD')}>
            <Text style={style.btnText}>Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('ANIMATIONS')}>
            <Text style={style.btnText}>Animations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('FLATLISTASSIGN')}>
            <Text style={style.btnText}>FlatListAssign</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={logInBtnHandler}>
            <Text style={style.btnText}>Log In Page</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  
}


export default ReactNavigation;
