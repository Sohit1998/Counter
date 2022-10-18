import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import style from './ColorStyle';

export class ColorApp extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            hexCode: ''
        }
    }
    onInputChangeHandler = (userText) => {
        console.log(userText);
        this.setState({
            userInput: userText
        })
    }

    showColorBtnHandler = () => {
        console.log('hello');
        // alert(this.state.userInput)
        this.setState({
            hexCode: this.state.userInput,
            userInput: ''
        })
    }

  render() {
    // console.log(this.state.hexCode);
    return (
      <SafeAreaView>
        <View style={style.main}>
          {/* <Text style= {style.heading}>COLOR VIEWER</Text> */}
        </View>
        <View style={[style.emptyView, styleForHex(this.state.hexCode)]}></View>
        <View style={style.inputView}>
          <TextInput
          onChangeText = {(userText) => this.onInputChangeHandler(userText)}
            style={style.inputText}
            placeholder="Enter the hex code here"></TextInput>
        </View>
        <View style= {style.buttonView}>
          <TouchableOpacity onPress= {this.showColorBtnHandler}>
            <Text style= {style.buttonText}>Show Color</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styleForHex = (colorCode) => {
    return (
        StyleSheet.create({
            backgroundColor: colorCode
        })
    )
}


export default ColorApp;
