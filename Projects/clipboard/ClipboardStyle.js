import { StyleSheet } from 'react-native';

const ClipboardStyle = StyleSheet.create({
    mainCont: {
        alignItems: 'center'
    },
    input: {
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        height: 40,
    },
    copyBtn: {
        backgroundColor: 'pink',
        width: 200,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
        
    },
    btnText: {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'underline'
    },
    copiedText: {
        
    }
})

export default ClipboardStyle;