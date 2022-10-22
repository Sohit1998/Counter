import {StyleSheet} from 'react-native';


const style = StyleSheet.create({
    main: {
        textAlign: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
        marginVertical: 40,
        // fontSize: 20,
    },

    heading: {
        color: 'green',
        padding: 2,
        fontSize: 20,
        fontWeight: '700',
        textDecorationLine: 'underline'
    },
    emptyView: {
        // width: 50,
        height: 150,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        // backgroundColor: 'red'
    },
    inputView: {
        // borderWidth: 2,
        // borderColor: 'black',

    },
    inputText: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 40,
        height: 40,
        paddingLeft: 20
    },
    buttonView: {
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonText: {
        backgroundColor: 'green',
        borderRadius: 10,
        borderWidth: 0,
        paddingHorizontal: 40,
        paddingVertical: 20,
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        overflow: 'hidden'
    }
})

export default style;