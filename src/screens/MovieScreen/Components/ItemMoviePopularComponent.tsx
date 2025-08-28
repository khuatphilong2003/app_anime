import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IMovie} from '#/types';
import {baseImg} from '#/utils/baseImg';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';

interface DataProps {
  item: IMovie;
}

const ItemMoviePopularComponent = ({item}: DataProps) => {
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

export default ItemMoviePopularComponent;

const styles = StyleSheet.create({
  imagePoster: {
    height: 231,
    width: 160,
    borderRadius: 8,
  },
  container: {
    marginTop: 8,
    marginRight: 16,
  },
});
