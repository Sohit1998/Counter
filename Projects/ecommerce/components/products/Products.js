import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import style from './ProductsStyle';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';

const arr = [
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png',
    name: 'Tommy Hilfiger',
    category: "Men's Morrison Style Polo",
    price: 'USD 23',
  },
  
  
];
export class Products extends Component {
  render() {
    return (
      <ScrollView >
        <View style={style.productsMain}>
          {arr.map(item => {
            const {img, name, category, price} = item;
            return (
              <View style={style.imgCont}>
                <View style= {style.imageView}>
                  <Image
                    // style={{width: '100%',height: 200}}
                    style={style.img}
                    source={{uri: img}}
                  />
                </View>
                <Text style={style.productName}>{name}</Text>
                <Text style={style.productCategory}>{category}</Text>
                <Text style={style.productPrice}>{price}</Text>
                <Text style={style.new}>New</Text>
                {/* <Text>hjsdgfjdhsfgshjdg</Text> */}
                <TouchableOpacity style={style.heartBtn}>
                  <Image
                    style={style.heartImg}
                    source={require('../assets/heart(3).png')}></Image>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Products;
