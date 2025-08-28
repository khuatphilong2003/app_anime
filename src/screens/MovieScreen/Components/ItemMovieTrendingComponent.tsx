import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IMovie} from '#/types';
import {sizeApp} from '#/themes/styles';
import {baseImg} from '#/utils/baseImg';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {Screens, StackParamsType} from '#/navigations/type';
import {useNavigation} from '@react-navigation/native';
interface DataProps {
  item: IMovie;
}

const SIZE_HEIGT = sizeApp.HEIGHT * 0.4;
const ItemMovieTrendingComponent = ({item}: DataProps) => {
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
        style={styles.sizeImage}
      />
      <View style={styles.containerLiner}>
        <LinearGradient
          colors={[colors.BLACK, colors.TRANSION]}
          style={styles.linear}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 0,
            y: 0,
          }}>
          <View style={styles.containerStar}>
            <Image
              source={{
                uri: 'IconStar',
              }}
              style={styles.iconStar}
            />
            <Text variant="Medium2" style={{marginLeft: 8}}>
              {item.vote_average}/10
            </Text>
          </View>
          <Text variant="SubHeadline0">{item.title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMovieTrendingComponent;

const styles = StyleSheet.create({
  container: {
    height: SIZE_HEIGT,
    width: sizeApp.WIDTH,
  },
  sizeImage: {
    height: '100%',
    width: '100%',
  },
  containerLiner: {
    position: 'absolute',
    height: SIZE_HEIGT,
    width: sizeApp.WIDTH,
    justifyContent: 'flex-end',
  },
  linear: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconStar: {
    height: 18,
    width: 18,
  },
  containerStar: {
    flexDirection: 'row',
  },
});
