import {StyleSheet} from 'react-native';

const ReactAnimationStyle = StyleSheet.create({
    container: {
        flex: 1,
      },
      textOne: {
        position: 'absolute',
        left: 0,
      },
      textTwo: {
        position: 'absolute',
        right: 0,
      },
      textThree: {
        position: 'absolute',
        bottom: 10,
        left: 3,
      },
      textFour: {
        position: 'absolute',
        bottom: 10,
        right: 3,
      },
      texts: {
        color: 'red',
        fontSize: 45,
        fontWeight: '800',
      },
});

export default ReactAnimationStyle;