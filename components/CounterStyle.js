import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

counterCont: {
    display: 'flex',
    // alignItems: 'center',
    fontSize: 30,
    width: '80%',
    marginTop: 40,
    // backgroundColor: 'pink',
    borderRadius: 10

  },
  counterValue: {
    fontSize: 60,
    textAlign: 'center',
    borderRadius: 100,
    backgroundColor: 'green',
    color: 'white',
  },
  btnCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginTop: 50

    
  },
  btnText: {
    flexDirection: 'row',
    fontSize: 30,
    padding: 10,
    color: 'white',
    width: 150,
    textAlign: 'center'

    
  },
  btn:{
    borderRadius: 10,
    backgroundColor: 'pink',

  },

  secbtnMain: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  secbtn: {
    backgroundColor: 'pink',
    display: 'flex',
    padding: 20,
    borderRadius: 10,
  },

  resetbtn: {
    backgroundColor: 'pink',
    padding: 20,

  }

  

   
});

export default styles ;