import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {sizeApp, styleApp} from '#/themes/styles';
import TrendingComponent from './Components/TrendingComponent';
import {Text} from '#/themes';
import MoviePopularComponent from './Components/MoviePopularComponent';
import MovieTopRateComponent from './Components/MovieTopRateComponent';
import MovieNowPlayingComponent from './Components/MovieNowPlayingComponent';

const MovieScreen = () => {
  return (
    <ScrollView style={styleApp.flex1}>
      <View style={styles.containerTreding}>
        <TrendingComponent />
      </View>
      <View style={{marginTop: 40, paddingHorizontal: 16}}>
        <Text variant="SubHeadline1">Movie popular</Text>
        <MoviePopularComponent />
      </View>
      <View style={{marginTop: 40, paddingHorizontal: 16}}>
        <Text variant="SubHeadline1">Top rated</Text>
        <MovieTopRateComponent />
      </View>
      <View style={{marginTop: 40, paddingHorizontal: 16}}>
        <Text variant="SubHeadline1">Now playing</Text>
        <MovieNowPlayingComponent />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  containerTreding: {
    height: sizeApp.HEIGHT * 0.4,
  },
});
