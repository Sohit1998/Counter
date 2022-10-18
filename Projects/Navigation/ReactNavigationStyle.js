import {StyleSheet} from 'react-native';

const style = StyleSheet.create ({
    primaryCont: {
        flex:1,
        backgroundColor:'#CCF381',
        // borderWidth:2,
        // margin: 10,
        paddingBottom: 40,
        borderRadius: 10
        // alignItems: 'center'
    },
    headCont: {
        alignItems: 'center'
    },
    heading:{
      fontSize:25,
      fontweight:'800',
      padding:20,
      justifyContents:'center',
      alignItems:'center',
      textDecorationLine: 'underline',
    },
    buttonCont: {
        alignItems: 'center',
        textAlign: 'center',
        // borderWidth: 2,
        margin: 40,
        padding: 20,
        backgroundColor: '#CCF381',
        // borderRadius:10,

    },
    link: {
        width: 200,
        // borderWidth: 2,
        padding: 20,
        margin: 10,
        borderRadius:10,
        backgroundColor: 'rgb(59,107,246)',
      textDecorationLine: 'underline',
        
    },
    btnText:{
        color: 'white',
        fontSize: 15,
        fontweight: '900',
        textAlign:'center'
    }
})


export default style;