import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';

const DATA = [
  {
    id: 101,
    imageUrl: 'https://source.unsplash.com/1600x900/?beach',
  },
  {
    id: 102,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 103,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 104,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 105,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 106,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 107,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 108,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 109,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 110,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 111,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 112,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 113,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 114,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 115,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 116,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 117,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 118,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 119,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 120,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 121,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 122,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 123,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 124,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 125,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 126,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 127,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 128,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 129,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 130,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 131,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 132,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 133,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 134,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 135,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 136,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 137,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 138,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 139,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 140,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
];

const FlatListAssign = () => {
  const [text, setText] = useState('');
  let flatRef = useRef(null);

  const onBtnPressHandler = () => {
    const id = DATA.findIndex(item => item.id === text);
    flatRef.scrollToIndex({index: id, viewPosition: 0});
  };

  const _getItemLayout = useCallback((_, index) => ({
    length: 275,
    offset: 275 * index,
    index,
  }));

  const [isEnd, setIsEnd] = useState(false);
  const handleOnEndReached = () => {
    setIsEnd(true);
  };

  let len = DATA.length;
  let total = len * 400;
  const onScrollEvent = ({contentOffset}) => {
    console.log(contentOffset.y, total);
    return contentOffset.y <= 10290;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          borderWidth: 2,
          margin: 15,
        }}>
        <View style={{padding: 10, margin: 20}}>
          <TextInput
            style={styles.InputBox}
            value={text}
            placeholder="Enter an Index"
            onChangeText={text => {
              setText(parseInt(text));
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1} onPress={onBtnPressHandler}>
              Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        ref={ref => {
          flatRef = ref;
        }}
        onScroll={({nativeEvent}) => {
          if (onScrollEvent(nativeEvent)) {
            setIsEnd(false);
          }
        }}
        style={{flex: 1, backgroundColor: 'white'}}
        data={DATA}
        keyExtractor={(item,index) => item + index.toString()}
        onEndReached={handleOnEndReached}
        getItemLayout={_getItemLayout}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 5,
                borderRadius: 10,
                backgroundColor: 'pink',
                margin: 10,
                justifyContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    paddingVertical: 10,
                    fontSize: 15,

                    color: 'black',
                    textAlign: 'center',
                  }}>
                  {item.id}
                </Text>
              </View>
              <View>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{
                    height: 200,
                    width: 200,
                    alignSelf: 'center',
                    margin: 10,
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      {isEnd && (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              flatRef.scrollToIndex({
                index: 0,
                animted: true,
                viewPosition: 1,
              });
            }}>
            <Text style={styles.scrollTxt}>SCROLL TO TOP</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: '90%',
    marginTop: 50,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
  },
  InputBox: {
    borderWidth: 5,
    borderColor: 'black',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 200,
    textAlign: 'center',
  },
  button1: {
    backgroundColor: 'green',
    marginTop: 30,
    height: 30,
    width: 70,
  },
  buttonText1: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginTop: 6,
  },
  button: {
    backgroundColor: 'rgb(133,136,140)',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollTxt: {
    fontSize: 14,
    padding: 20,
    color: 'white',
  },
});

export default FlatListAssign;
