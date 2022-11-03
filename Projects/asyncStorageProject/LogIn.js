import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import UserInput from './UserInput';

const data = [
  {
    fkeys: 'name',
    img: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
    placeholder: 'John Doe',
  },
  {
    fkeys: 'email',
    img: 'https://cdn-icons-png.flaticon.com/128/646/646094.png',
    placeholder: 'johndoe@gmail.com',
  },
  {
    fkeys: 'contact',
    img: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
    placeholder: 'Contact No',
  },
  {
    fkeys: 'password',
    img: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
    placeholder: 'Password',
  },
  {
    fkeys: 'confirmpassword',
    img: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
    placeholder: 'Confirm Password',
  },
];



const LogIn = ({ navigation }) => {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmpassword: '',
  });

  console.log("hii debugger");

  

  const onChangeTextHandler = ( value,fkeys ) => {
    setUserInput({
        ...userInput,
        [fkeys]: value
    })
  }

  const onCreateBtnHandler = async() => {
    if(userInput.name ==='' && userInput.email === '',userInput.confirmpassword==='',userInput.password==='',userInput.contact===''){
        alert('required')
    }else{
      await AsyncStorage.setItem("userDetails", JSON.stringify(userInput))
      
    navigation.replace('ASYNCHOME');
    }
  }

//   console.log(userInput);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.card}>
        <View style={style.topSpace} />

        <View style={style.topTextView}>
          <Text style={style.textStarted}>Let's Get Started!</Text>
          <Text style={style.textAccount}>
            Create an account to Q Allure to get all features
          </Text>
        </View>

        <View style={style.component}>
          {data.map((item, index) => {
            return (
              <UserInput
                key={index}
                index={index}
                placeholder={item.placeholder}
                img={item.img}
                fkeys= {item.fkeys}
                onChangeInput ={onChangeTextHandler}
              />
            );
          })}
        </View>

        <View style={style.createView}>
          <TouchableOpacity style={style.button} onPress={onCreateBtnHandler}>
            <Text style={style.createTxt}>CREATE</Text>
          </TouchableOpacity>
        </View>

        <View style={style.bottomView}>
          <Text style={style.accountTextBottom}>Already have an account? </Text>
          <Text style={style.loginTxt}>Login Here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dddd',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: 20,
  },
  topSpace: {
    height: 100,
  },
  topTextView: {
    width: 350,
    height: 90,
  },
  textStarted: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textAccount: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
    textAlign: 'center',
  },
  component: {
    paddingVertical: 20,
  },
  createView: {
    height: 50,
    width: 150,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(27,86,200)',
    widtth: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 30,
  },
  createTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 40,
  },
  accountTextBottom: {
    color: 'rgb(81,87,93)',
    fontSize: 14,
    //paddingVertical: 20,
  },
  loginTxt: {
    fontWeight: 'bold',
    color: 'rgb(64,128,244)',
  },
});
