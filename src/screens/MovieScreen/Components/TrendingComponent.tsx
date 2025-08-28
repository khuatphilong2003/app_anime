import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import useSWR from 'swr';
import {Get_list_trending} from '#/api/instance';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {IMovie} from '#/types';
import ItemMovieTrendingComponent from './ItemMovieTrendingComponent';
import {sizeApp} from '#/themes/styles';

const TrendingComponent = () => {
  const {data, isLoading} = useSWR<IMovie[]>('listTrending', Get_list_trending);

  const renderItem = useCallback(({item}: {item: IMovie}) => {
    return <ItemMovieTrendingComponent item={item} />;
  }, []);
  const keyExtractor = useCallback((item: IMovie) => {
    return item.id.toString();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator color={colors.PINK} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          {data ? (
            <FlatList
              horizontal
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              bounces={false}
              snapToInterval={sizeApp.WIDTH}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.GRAY02,
                borderRadius: 8,
              }}>
              <Text variant="Medium2" style={{color: colors.GRAY}}>
                No data
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
