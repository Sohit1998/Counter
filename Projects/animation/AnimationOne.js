import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useState, useEffect } from 'react';

const AnimationOne = () => {

    let rotateAnimation = new Animated.Value(0);
    let fadeValue = new Animated.Value(0);
    let fontSize = new Animated.Value(10);

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0,0.4,0.6, 1],
        outputRange: ['0deg', '1080deg', '360deg', '1080deg'],
      });
    
    useEffect (() => {
      Animated.loop(Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: false,
      })).start()

      Animated.loop(Animated.timing(fadeValue, {
        toValue: 1,
        duration: 6000
      })).start();
      Animated.loop(Animated.timing(fontSize, {
        toValue: 40,
        duration: 6000
      })).start();
    },[])
    

  return (
    <View style={style.animationCont} >
      <Animated.Text style={{
        color:'red',
        fontSize:fontSize,
        fontWeight:'600',
        opacity: fadeValue,
        transform: [{rotate: interpolateRotating}],
      }}
      >ANIMATION</Animated.Text>
      
    </View>
  )
}

const style = StyleSheet.create({
  animationCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default AnimationOne;


