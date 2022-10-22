import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import style from './movieDetailStyle';

export class MovieDetails extends Component {
  render() {
    return (
      <View>
        <View style={style.releaseInfo}>
          <View>
            <Text style={style.textHead}>Year</Text>
            <Text style={style.text}>2019</Text>
          </View>
          <View>
            <Text style={style.textHead}>Country</Text>
            <Text style={style.text}>USA</Text>
          </View>
          <View>
            <Text style={style.textHead}>Length</Text>
            <Text style={style.text}>112 min</Text>
          </View>
        </View>

        <View style={style.about}>
          <Text style={style.aboutHead}>About Movie</Text>
          <Text style={style.desc}>
            The general way to set the dimensions of a component is by adding a
            fixed width and height to style. All dimensions in React Native are
            unitless, and represent density-independent pixels.
          </Text>
          <Text style={style.screenshot}>Screenshots</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={style.ssCont}>
            <Image
              style={style.ssImages}
              source={require('../assets/abc.jpeg')}></Image>
            <Image
              style={style.ssImages}
              source={require('../assets/abc.jpeg')}></Image>
            <Image
              style={style.ssImages}
              source={require('../assets/abc.jpeg')}></Image>
            <Image
              style={style.ssImages}
              source={require('../assets/abc.jpeg')}></Image>
          </View>
        </ScrollView>
        <View style= {style.ticketBtn}>
            <TouchableOpacity>
                <Text style= {style.ticketText}>BUY TICKET</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MovieDetails;
