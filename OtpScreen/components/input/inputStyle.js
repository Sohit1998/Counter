import {StyleSheet} from 'react-native';

const inputStyle = StyleSheet.create({
  textInput: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    color: 'black',
    width: 50,
    borderRadius: 5,
    borderColor: 'rgb(230,230,230)'
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnCont: {
    marginVertical: 60,
    // borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center'
  },
  continueBtn: {
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 100,
    borderColor: 'green',
    color: 'green',
    fontSize: 18
    // alignItems: 'center'
  }
});

export default inputStyle;
