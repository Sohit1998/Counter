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
            // arr: []
        // }
    

    // inputChangeHandler = (name,value,ref) => {
    //     this.setState({
    //         ...this.state.input, 
    //         [name] : value
            
    //     })
    //     if(name !== ''){
    //         this.name.focus()
    //     }
        
    // }

    // keyPressHandler = (nativeEvent,refer, input) => {
    //   console.log(nativeEvent.current);
      
    //   console.log(nativeEvent.key);
    //   if(nativeEvent.key === 'Backspace' ) {
        
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
            // name= 'input1'
            // onKeyPress={({ nativeEvent }) => {
            //     nativeEvent.key === 'Backspace' ? this.refs.inputref1.clear() : null}}
            // onKeyPress = {({nativeEvent, }) => keyPressHandler(nativeEvent,"inputref1",'input1')}
            value= {this.state.input1}
            // onChangeText= {(value) => inputChangeHandler('input1','inputref1',value)}
            autoFocus= {true}
            maxLength= {this.maxLength}
            style={style.textInput}
            // onKeyPress = {}
          />


          <TextInput
            ref= {'inputref2'}
            onChangeText= {(input2)  => {
                this.setState({input2: input2});
                if(input2 !== ''){
                    this.refs.inputref3.focus();
                }
                
            }}
            // onKeyPress = {({nativeEvent}) => keyPressHandler(nativeEvent, "inputref2", 'input2')}
            onKeyPress={({ nativeEvent }) => {
              if(nativeEvent.key === 'Backspace' && this.state.input2 === '' && this.state.input1 !== '')
              {
                  this.refs.inputref1.focus()
                  this.setState({input1 : ''})
              }}}
            // name= 'input2'
            value= {this.state.input2}
            // onChangeText= {(value) => inputChangeHandler('input2',value)}
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
            // onKeyPress = {({nativeEvent}) => keyPressHandler(nativeEvent, "inputref3",'input3')}
            // name= 'input3'
            value= {this.state.input3}
            // onChangeText= {(value) => inputChangeHandler('input3',value)}
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
                  // console.log('input4');
              }}}
            // onKeyPress = {({nativeEvent},) => keyPressHandler(nativeEvent, "inputref4", 'input4')}
            // name= 'input4'
            value= {this.state.input4}
            // onChangeText= {(value) => inputChangeHandler('input4',value)}
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
