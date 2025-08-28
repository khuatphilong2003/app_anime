import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IMovie} from '#/types';
import {baseImg} from '#/utils/baseImg';
import {Screens, StackParamsType} from '#/navigations/type';
import {useNavigation} from '@react-navigation/native';

interface DataProps {
  item: IMovie;
}

const ItemMovieTopRateComponent = ({item}: DataProps) => {
  const navigation = useNavigation<StackParamsType>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(Screens.DetailMovieScreen, {
      idMovie: item.id,
    });
  }, [item, navigation]);
  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.container}>
      <Image
        source={{
          uri: `${baseImg.w300}/${item.poster_path}`,
        }}
        style={styles.imagePoster}
      />
    </TouchableOpacity>
  );
};

export default ItemMovieTopRateComponent;

const styles = StyleSheet.create({
  imagePoster: {
    height: 180,
    width: 120,
    borderRadius: 8,
  },
  container: {
    marginTop: 8,
    marginRight: 16,
  },
});
