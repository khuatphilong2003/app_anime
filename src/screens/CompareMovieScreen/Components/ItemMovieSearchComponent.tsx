import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMovie} from '#/types';
import {baseImg} from '#/utils/baseImg';
import {sizeApp} from '#/themes/styles';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';

interface DataProps {
  item: IMovie;
  hanldleChangeMovie: (item: IMovie) => void;
}

const ItemMovieSearchComponent = ({item, hanldleChangeMovie}: DataProps) => {
  return (
    <TouchableOpacity
      style={{marginBottom: 16, flexDirection: 'row'}}
      onPress={() => hanldleChangeMovie(item)}>
      <Image
        source={{
          uri: `${baseImg.w300}/${item.poster_path}`,
        }}
        style={{
          height: sizeApp.WIDTH / 4 + 50,
          width: sizeApp.WIDTH / 4,
          borderRadius: 8,
        }}
      />
      <View
        style={{
          width: sizeApp.WIDTH - 50 - sizeApp.WIDTH / 4,
          marginLeft: 8,
          justifyContent: 'center',
        }}>
        <Text variant="Medium1">{item.title}</Text>
        <Text variant="Medium2" style={{color: colors.GRAY}}>
          {item.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMovieSearchComponent;
