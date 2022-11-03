import {
  View,
  Text,
  AsyncStorage,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function AsyncHome({navigation}) {
  const [savedData, setSavedData] = useState({});
  //   const [loading, setLoading] = useState(true);

  async function handleGetData() {
    try {
      const value = await AsyncStorage.getItem('userDetails');

      if (value !== null) {
        setSavedData(JSON.parse(value));
      }
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    handleGetData();
  }, []);

  const logoutBtnHandler = async () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'dont logout',
        onPress: async () => {
          navigation.goBack();
        },
        style: 'cancel',
      },
      {
        text: 'logout',
        onPress: async () => {
          await AsyncStorage.clear();
          navigation.goBack();
        },
      },
    ]);
  };
  return (
    <SafeAreaView>
      <View style={style.logoutMain}>
        <Text style={style.text}>Name : {savedData.name}</Text>
        <Text style={style.text}>Email : {savedData.email}</Text>
        <Text style={style.text}>Contact : {savedData.contact}</Text>
        <Text style={style.text}>Password : {savedData.password}</Text>
        <Text style={style.text}>
          Confirm Pasword : {savedData.confirmpassword}
        </Text>
        <TouchableOpacity onPress={logoutBtnHandler} style= {style.btn}>
          <Text style= {style.textBtn}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  logoutMain: {
    alignItems: 'center',
    borderWidth: 2,
    margin: 30,
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'pink'
  },
  text: {
    borderWidth: 2,
    width: 300,
    padding: 10,
    margin: 2
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 5
  },
  textBtn: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18
  }

});
