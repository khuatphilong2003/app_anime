import {Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IFavoriteMovie} from '#/types';
import {baseImg} from '#/utils/baseImg';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';
import { sizeApp } from '#/themes/styles';

interface DataProps {
  item: IFavoriteMovie;
}

const ItemMovieFavoriteComonent = ({item}: DataProps) => {
  const navigation = useNavigation<StackParamsType>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(Screens.DetailMovieScreen, {
      idMovie: item.idMovie,
    });
  }, [navigation, item]);
  return (
    <TouchableOpacity
      onPress={handleNavigation}
      style={{marginLeft: 8, marginTop: 16}}>
      <Image
        source={{
          uri: `${baseImg.w300}/${item.image}`,
        }}
        style={{
          height: sizeApp.WIDTH/3+50,
          width: sizeApp.WIDTH/3-12,
          borderRadius: 8,
        }}
      />
    </TouchableOpacity>
  );
};

export default ItemMovieFavoriteComonent;
