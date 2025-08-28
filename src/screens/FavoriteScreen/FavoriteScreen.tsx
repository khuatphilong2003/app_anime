import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {sizeApp, styleApp} from '#/themes/styles';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';
import {useQuery} from '#/configs/realm.config';
import {FavoriteMovieSchema} from '#/models/Favorite.model';
import {IFavoriteMovie} from '#/types';
import ItemMovieFavoriteComonent from './Components/ItemMovieFavoriteComonent';

const FavoriteScreen = () => {
  const listFavorite: IFavoriteMovie[] = useQuery(FavoriteMovieSchema) as never;
  const renderItem = useCallback(({item}: {item: IFavoriteMovie}) => {
    return <ItemMovieFavoriteComonent item={item} />;
  }, []);
  return (
    <SafeAreaView style={styleApp.flex1}>
      <View style={styleApp.flex1}>
        <View style={{alignItems: 'center'}}>
          <Text variant="BOLD1" style={{color: colors.WHITE}}>
            Favorite
          </Text>
        </View>
        <View style={{marginTop: 32}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{height: 30, width: 5, backgroundColor: colors.PINK}}
            />
            <Text variant="Medium1" style={{marginLeft: 8}}>
              Movie
            </Text>
          </View>
          <View>
            <FlatList
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              data={listFavorite}
              renderItem={renderItem}
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      marginVertical: 16,
                      width: sizeApp.WIDTH,
                    }}>
                    <Text variant="Medium1" style={{color: colors.GRAY}}>
                      No data
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
