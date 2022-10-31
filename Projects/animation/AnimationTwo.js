import {Text, View, Animated, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import styles from './ReactAnimationStyle';

export default class AnimationTwo extends Component {
  constructor() {
    super();
    this.state = {
      xCordOne: new Animated.Value(0),
      yCordOne: new Animated.Value(0),
      xCordTwo: new Animated.Value(0),
      yCordTwo: new Animated.Value(0),
      xCordThree: new Animated.Value(0),
      yCordThree: new Animated.Value(0),
      xCordFour: new Animated.Value(0),
      yCordFour: new Animated.Value(0),
      fadeText: new Animated.Value(0),
      fadeTextSpin: new Animated.Value(0),
    };
  }

  widthOfScreen = Dimensions.get('screen').width;

  heightOfScreen = Dimensions.get('screen').height;

  componentDidMount = () => {
    Animated.loop(
      Animated.timing(this.state.xCordOne, {
        toValue: this.widthOfScreen - 133,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.yCordOne, {
        toValue: this.heightOfScreen - 160,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.xCordTwo, {
        toValue: -this.widthOfScreen + 140,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.yCordTwo, {
        toValue: this.heightOfScreen - 160,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.xCordThree, {
        toValue: this.widthOfScreen - 143,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.yCordThree, {
        toValue: -this.heightOfScreen + 155,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.xCordFour, {
        toValue: -this.widthOfScreen + 143,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.yCordFour, {
        toValue: -this.heightOfScreen + 155,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.fadeText, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(this.state.fadeTextSpin, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={[styles.textOne, {opacity: this.state.fadeText}]}>
          <Animated.Text
            style={[
              styles.texts,
              {
                transform: [
                  {translateX: this.state.xCordOne},
                  {translateY: this.state.yCordOne},
                  {
                    rotate: this.state.fadeTextSpin.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '3600deg'],
                    }),
                  },
                ],
              },
            ]}>
            Task 1
          </Animated.Text>
        </Animated.View>

        <Animated.View style={[styles.textTwo, {opacity: this.state.fadeText}]}>
          <Animated.Text
            style={[
              styles.texts,
              {
                transform: [
                  {translateX: this.state.xCordTwo},
                  {translateY: this.state.yCordTwo},
                  {
                    rotate: this.state.fadeTextSpin.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '3600deg'],
                    }),
                  },
                ],
              },
            ]}>
            Task 2
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={[styles.textThree, {opacity: this.state.fadeText}]}>
          <Animated.Text
            style={[
              styles.texts,
              {
                transform: [
                  {translateX: this.state.xCordThree},
                  {translateY: this.state.yCordThree},
                  {
                    rotate: this.state.fadeTextSpin.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '3600deg'],
                    }),
                  },
                ],
              },
            ]}>
            Task 3
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={[styles.textFour, {opacity: this.state.fadeText}]}>
          <Animated.Text
            style={[
              styles.texts,
              {
                transform: [
                  {translateX: this.state.xCordFour},
                  {translateY: this.state.yCordFour},
                  {
                    rotate: this.state.fadeTextSpin.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '3600deg'],
                    }),
                  },
                ],
              },
            ]}>
            Task 4
          </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}


