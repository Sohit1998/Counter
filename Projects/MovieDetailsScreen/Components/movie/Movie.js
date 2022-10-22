import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import style from './movieStyle';

export class Movie extends Component {
  render() {
    return (
      <View style={style.imageCont}>
        <Image
          style={style.img}
          source={require('../assets/howtotrainT.jpg')}
        />
        <View style={style.info}>
          <Text style={style.name}>
            How To Train YourDragon The Hidden World
          </Text>
          <Text style= {style.part}>Part III</Text>
        </View>
        <View style=  {style.genre}>
            <TouchableOpacity>
                <Text style= {style.genreText}>Adventure</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {style.genreText}>Family</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {style.genreText}>Fantasy</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Movie;
