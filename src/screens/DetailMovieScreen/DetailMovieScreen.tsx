import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useCallback} from 'react';
import {styleApp} from '#/themes/styles';
import {Text} from '#/themes';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  RootStackNavigationParamLists,
  Screens,
  StackParamsType,
} from '#/navigations/type';
import useSWR from 'swr';
import {IMovie} from '#/types';
import {Get_Movie_Detail} from '#/api/instance';
import {colors} from '#/themes/colors';
import DetailComponent from './Components/DetailComponent';

type DataProps = RouteProp<
  RootStackNavigationParamLists,
  Screens.DetailMovieScreen
>;

const DetailMovieScreen = () => {
  const route = useRoute<DataProps>();
  const {idMovie} = route.params;
  const navigation = useNavigation<StackParamsType>();
  const {data, isLoading} = useSWR<IMovie>(`MovieBy${idMovie}`, () =>
    Get_Movie_Detail(idMovie),
  );
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styleApp.flex1}>
      {isLoading ? (
        <View style={styles.containerLoading}>
          <View style={{flex: 1}}>
            <SafeAreaView>
              <View style={{paddingHorizontal: 16}}>
                <TouchableOpacity onPress={handleGoBack}>
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
              </View>
            </SafeAreaView>
            <View style={styles.contentLoading}>
              <ActivityIndicator color={colors.PINK} />
            </View>
          </View>
        </View>
      ) : (
        <View style={styleApp.flex1}>
          {data ? (
            <View>
              <DetailComponent item={data} />
            </View>
          ) : (
            <View style={styles.containerLoading}>
              <View style={{flex: 1}}>
                <SafeAreaView>
                  <View style={{paddingHorizontal: 16}}>
                    <TouchableOpacity onPress={handleGoBack}>
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
                  </View>
                </SafeAreaView>
                <View style={styles.contentLoading}>
                  <Text variant="Medium2">No data</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
  },
  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
