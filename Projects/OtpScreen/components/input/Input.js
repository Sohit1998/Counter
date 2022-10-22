import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import style from './inputStyle';

export class Input extends Component {
    constructor() {
      
    super()
    this.maxLength = 1
    this.state = {
            input1: '',
            input2: '',
            input3: '',
            input4: ''
        }
      }
      
    


      
  render() {
    return (
      <View>
        <View style={style.inputBox}>

          <TextInput
            ref= {'inputref1'}
            onChangeText= {(input1)  => {
                this.setState({input1: input1});
                if(input1 !== ''){
                    this.refs.inputref2.focus()
                }
            }}
            
            value= {this.state.input1}
            
            autoFocus= {true}
            maxLength= {this.maxLength}
            style={style.textInput}
          />


          <TextInput
            ref= {'inputref2'}
            onChangeText= {(input2)  => {
                this.setState({input2: input2});
                if(input2 !== ''){
                    this.refs.inputref3.focus();
                }
                
            }}
            
            onKeyPress={({ nativeEvent }) => {
              if(nativeEvent.key === 'Backspace' && this.state.input2 === '' && this.state.input1 !== '')
              {
                  this.refs.inputref1.focus()
                  this.setState({input1 : ''})
              }}}
            // name= 'input2'
            value= {this.state.input2}
            maximumLength={this.maxLength}
            keyboardType="numeric"
            style={style.textInput}
            maxLength= {this.maxLength}
          />



          <TextInput
            ref= {'inputref3'}
            onChangeText= {(input3) => {
                this.setState({input3: input3});
                if(input3 !== ''){
                    this.refs.inputref4.focus();
                }
            }}
            onKeyPress={({ nativeEvent }) => {
                
              if(nativeEvent.key === 'Backspace' && this.state.input3 === '' && this.state.input2 !== '')
              {
                  this.refs.inputref2.focus()
                  this.setState({input2 : ''})
              }}}
            
            value= {this.state.input3}
            maximumLength={this.maxLength}
            keyboardType="numeric"
            style={style.textInput}
            maxLength= {this.maxLength}
          />



          <TextInput
            ref= {'inputref4'}
            onChangeText= {(input4)  => {
                this.setState({input4: input4});
                
            }}
            onKeyPress={({ nativeEvent }) => {
              if(nativeEvent.key === 'Backspace' && this.state.input4 === '' && this.state.input3 !== '')
              {
                  this.refs.inputref3.focus()
                  this.setState({input3 : ''})
              }}}
            
            value= {this.state.input4}
            maximumLength={this.maxLength}
            keyboardType="numeric"
            style={style.textInput}
            maxLength= {this.maxLength}
          />
        </View>
        <View style={style.btnCont}>
          <TouchableOpacity>
            <Text style={style.continueBtn}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Input;
