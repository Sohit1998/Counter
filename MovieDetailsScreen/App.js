import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Header from './Components/header/Header';
import Movie from './Components/movie/Movie';
import MovieDetails from './Components/details/movieDetails';
import style from './appStyle';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={style.mainContainer}>
            <Header></Header>
            <View style={style.secContainer}>
              <Movie></Movie>
              <MovieDetails></MovieDetails>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
