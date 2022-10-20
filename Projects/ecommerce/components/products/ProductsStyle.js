

import {StyleSheet} from 'react-native';
const ProductsStyle = StyleSheet.create({
    productsMain: {
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignSelf: 'flex-start',
        // height: 1000,
        // maxHeight: '90%',
        // backgroundColor: 'red'
    },

    imgCont: {
        marginHorizontal: 9,
        // borderWidth: 2,
        width: '45%',
        // height: 200,
        marginVertical: 10,
    },
    imageView: {
        backgroundColor: 'rgb(240,237,244)',

    },
    
    img: {
        // borderWidth: 2,
        paddingTop: 10,
        width: '100%',
        height: 200,
    },
    productName: {
        marginVertical: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    productCategory: {
        color: 'grey'
    },
    productPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        margin:2,
    },
    new: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'green',
        padding: 3,
        color: 'white'
    },
    heartBtn: {
        // position: 'absolute',
        // right: 10,
        // bottom: 240,
        // padding:5,
        // backgroundColor: 'black',
        // borderWidth:2
    },
    heartImg: {
        width:35,
        height:35,
        position: 'absolute',
        right: 10,
        bottom: 240,
        // padding:5,

        
    },
    productPrice: {

    }

});

export default ProductsStyle;