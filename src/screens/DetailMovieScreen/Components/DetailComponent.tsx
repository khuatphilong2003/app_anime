import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {IFavoriteMovie, IMovie, IMovieImage} from '#/types';
import {sizeApp} from '#/themes/styles';
import {baseImg} from '#/utils/baseImg';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import useSWR from 'swr';
import {Get_Image_Movie} from '#/api/instance';
import ItemBackdropsComponent from './ItemBackdropsComponent';
import {useQuery, useRealm} from '#/configs/realm.config';
import {FavoriteMovieSchema} from '#/models/Favorite.model';
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';

interface DataProps {
  item: IMovie;
}

const DetailComponent = ({item}: DataProps) => {
  const {data, isLoading} = useSWR(`ListImage${item.id}`, () =>
    Get_Image_Movie(item.id),
  );
  const navigation = useNavigation<StackParamsType>();
  const renderItem = useCallback(({item}: {item: IMovieImage}) => {
    return <ItemBackdropsComponent item={item} />;
  }, []);
  const realm = useRealm();
  const listMovieFavorited: IFavoriteMovie[] = useQuery(
    FavoriteMovieSchema,
  ) as never;

  const checkFavorite = useMemo((): IFavoriteMovie | null => {
    return listMovieFavorited.filter(obj => obj.idMovie === item.id)[0] || null;
  }, [listMovieFavorited, item]);

  const handleFavorite = useCallback(() => {
    const obj: IFavoriteMovie = {
      id: new Realm.BSON.ObjectId(),
      idMovie: item.id,
      image: item.poster_path ? item.poster_path : '',
    };
    checkFavorite
      ? FavoriteMovieSchema.handleDeleteFavoriteMovie(realm, checkFavorite.id)
      : FavoriteMovieSchema.handleAddFavoriteMovie(realm, obj);
  }, [realm, checkFavorite, item]);

  const hanleNote = useCallback(() => {
    navigation.navigate(Screens.CreateNoteMovieScreen, {
      idMovie: item.id,
      image: item.poster_path ? item.poster_path : '',
      title: item.title,
    });
  }, [navigation, item]);
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: `${baseImg.w300}/${item.poster_path}`,
        }}
        blurRadius={10}
        style={styles.header}>
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
          <SafeAreaView style={{flex: 1}}>
            <View style={{marginHorizontal: 16, flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={{
                      uri: 'IconLeft',
                    }}
                    style={{
                      height: 24,
                      width: 24,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={hanleNote}>
                  <Image
                    source={{
                      uri: 'IconNote',
                    }}
                    tintColor={colors.WHITE}
                    style={{
                      height: 24,
                      width: 24,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: `${baseImg.w300}/${item.poster_path}`,
                  }}
                  style={{
                    width: sizeApp.WIDTH * 0.4,
                    height: '90%',
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>

      <View style={{alignItems: 'center'}}>
        <Text variant="SubHeadline0">{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'IconDate',
              }}
              style={{
                height: 22,
                width: 22,
              }}
            />
            <Text style={{marginLeft: 8}} variant="Medium3">
              {item.release_date}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <Image
              source={{
                uri: 'IconTime',
              }}
              style={{
                height: 22,
                width: 22,
              }}
            />
            <Text style={{marginLeft: 8}} variant="Medium3">
              {item.runtime}'
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleFavorite}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.GRAY03,
              borderRadius: 8,
              marginVertical: 16,
              padding: 10,
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri:
                  checkFavorite !== null
                    ? 'IconFavoriteChoose'
                    : 'IconFavorite',
              }}
              style={{
                width: 20,
                height: 19.5,
                marginRight: 8,
              }}
            />
            <Text variant="Medium1">FAVORITED</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: 16}}>
        <Text variant="Medium2">{item.overview}</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.GRAY03,
          padding: 8,
          marginHorizontal: 16,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 16,
          borderRadius: 8,
        }}>
        <Image
          source={{
            uri: 'IconGenres',
          }}
          style={{
            height: 22,
            width: 22,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: sizeApp.WIDTH - 70,
            marginLeft: 8,
          }}>
          {item.genres &&
            item.genres.map(item => {
              return (
                <Text variant="Medium3" style={{marginRight: 8}}>
                  {item.name},
                </Text>
              );
            })}
        </View>
      </View>
      <Text variant="SubHeadline0" style={{marginLeft: 8}}>
        Media content
      </Text>
      <View style={{marginHorizontal: 16, marginVertical: 16}}>
        {isLoading ? (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator color={colors.PINK} />
          </View>
        ) : (
          <View>
            {data ? (
              <FlatList
                horizontal
                data={data.backdrops}
                renderItem={renderItem}
              />
            ) : (
              <Text>No data</Text>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  header: {
    height: sizeApp.HEIGHT * 0.4,
    backgroundColor: 'red',
  },
  linear: {
    height: '100%',
    width: '100%',
  },
});
