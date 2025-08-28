import {View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {sizeApp, styleApp} from '#/themes/styles';
import {useNavigation} from '@react-navigation/native';
import {StackParamsType} from '#/navigations/type';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {IMovie} from '#/types';
import {baseImg} from '#/utils/baseImg';
import BottomSearchMovieA from './Components/BottomSearchMovieA';
import BottomSearchMovieB from './Components/BottomSearchMovieB';
import CompareMovieComponent from './Components/CompareMovieComponent';

const CompareMovieScreen = () => {
  const navigation = useNavigation<StackParamsType>();
  const [visibleA, setVisibleA] = useState<boolean>(false);
  const [visibleB, setVisibleB] = useState<boolean>(false);
  const [movieA, setMovieA] = useState<IMovie | null>(null);
  const [movieB, setMovieB] = useState<IMovie | null>(null);
  const handleChangeVisibleA = useCallback((stt: boolean) => {
    setVisibleA(stt);
  }, []);
  const handleChangeMovieA = useCallback((item: IMovie) => {
    setMovieA(item);
  }, []);

  const handleChangeVisibleB = useCallback((stt: boolean) => {
    setVisibleB(stt);
  }, []);
  const handleChangeMovieB = useCallback((item: IMovie) => {
    setMovieB(item);
  }, []);

  const start = useMemo(() => {
    if (movieA && movieB) {
      return true;
    }
    return false;
  }, [movieA, movieB]);

  return (
    <SafeAreaView style={styleApp.flex1}>
      <View style={styleApp.flexPadding}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'IconLeft',
            }}
            style={{height: 24, width: 24}}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 8}}>
            <Text variant="BOLD1">Battle Movie</Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 16}}>
            <TouchableOpacity
              onPress={() => {
                handleChangeVisibleA(true);
              }}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: colors.YELLOW,
                marginRight: 16,
                height: sizeApp.WIDTH * 0.3 + 150,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {movieA ? (
                <Image
                  source={{
                    uri: `${baseImg.w300}/${movieA.poster_path}`,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 8,
                  }}
                />
              ) : (
                <Text variant="Medium2" style={{color: colors.YELLOW}}>
                  Choose movie
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleChangeVisibleB(true);
              }}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: colors.BLUE,
                height: sizeApp.WIDTH * 0.3 + 150,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {movieB ? (
                <Image
                  source={{
                    uri: `${baseImg.w300}/${movieB.poster_path}`,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 8,
                  }}
                />
              ) : (
                <Text variant="Medium2" style={{color: colors.BLUE}}>
                  Choose movie
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            {start && (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text variant="Medium2" style={{marginBottom: 8}}>
                  Vote count
                </Text>
                <CompareMovieComponent
                  number1={movieA ? movieA?.vote_count : 0}
                  number2={movieB ? movieB?.vote_count : 0}
                />
                <Text
                  variant="Medium2"
                  style={{marginBottom: 8, marginTop: 16}}>
                  Vote average
                </Text>
                <CompareMovieComponent
                  number1={movieA ? movieA?.vote_average : 0}
                  number2={movieB ? movieB?.vote_average : 0}
                />
                <Text
                  variant="Medium2"
                  style={{marginBottom: 8, marginTop: 16}}>
                  Popularity
                </Text>
                <CompareMovieComponent
                  number1={movieA ? movieA?.popularity : 0}
                  number2={movieB ? movieB?.popularity : 0}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <BottomSearchMovieA
        visible={visibleA}
        handleChangeVisibleA={handleChangeVisibleA}
        handleChangeMovieA={handleChangeMovieA}
      />
      <BottomSearchMovieB
        visible={visibleB}
        handleChangeVisibleB={handleChangeVisibleB}
        handleChangeMovieB={handleChangeMovieB}
      />
    </SafeAreaView>
  );
};

export default CompareMovieScreen;
