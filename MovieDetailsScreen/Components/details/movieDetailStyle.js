import {StyleSheet }from 'react-native';
//moviedetails

const style = StyleSheet.create({
    releaseInfo: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        // width: 180,
        justifyContent: 'space-evenly',
        paddingHorizontal: 50,
        // backgroundColor: 'rgb(248,249,252)',
        marginVertical: 40,
    },

    about: {
        alignSelf: 'stretch',
        // backgroundColor: 'red',
        // width: '80%',
        paddingHorizontal: 25
    },
    text: {
        marginVertical: 5,
        textAlign: 'center'
    },
    textHead: {
        color: 'grey'
    },
    aboutHead: {
        fontSize: 17,
        marginBottom: 20,
    },
    desc: {
        fontWeight: '200',
        marginBottom: 10
    },
    screenshot: {
        fontSize: 17,
        marginVertical: 30
    },
    ssCont: {
        // paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    ssImages: {
        marginLeft: 15,
        width: 200,
        height: 200,
        border: 0,
        borderRadius: 20,
    },
    ticketBtn: {
        marginHorizontal: 18,
        marginVertical: 25,
        border: 0,
        borderRadius: 7,
        backgroundColor: 'rgb(90,128,236)',
        padding: 20,
        alignItems: 'center',
    },
    ticketText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
    }
});


export default style;