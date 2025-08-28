import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {Get_list_now_playing} from '#/api/instance';
import useSWR from 'swr';
import {IMovie} from '#/types';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import ItemMovieTopRateComponent from './ItemMovieTopRateComponent';

const MovieNowPlayingComponent = () => {
  const {data, isLoading} = useSWR<IMovie[]>(
    'listNowPlyaing',
    Get_list_now_playing,
  );

  const renderItem = useCallback(({item}: {item: IMovie}) => {
    return <ItemMovieTopRateComponent item={item} />;
  }, []);
  const keyExtractor = useCallback((item: IMovie) => {
    return item.id.toString();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator color={colors.PINK} />
        </View>
      ) : (
        <View>
          {data ? (
            <FlatList
              horizontal
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                height: 180,
                justifyContent: 'center',
                backgroundColor: colors.GRAY02,
                borderRadius: 8,
              }}>
              <Text variant="Medium2">No data</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MovieNowPlayingComponent;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
