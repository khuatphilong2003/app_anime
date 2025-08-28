import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors} from '#/themes/colors';
import {sizeApp} from '#/themes/styles';
import {IMovie} from '#/types';
import {handleSearchMovie} from '#/api/instance';
import useSWR from 'swr';
import {Text} from '#/themes';
import ItemMovieSearchComponent from './ItemMovieSearchComponent';

interface DataProps {
  visible: boolean;
  handleChangeVisibleA: (stt: boolean) => void;
  handleChangeMovieA: (item: IMovie) => void;
}

const BottomSearchMovieA: React.FC<DataProps> = ({
  visible,
  handleChangeVisibleA,
  handleChangeMovieA,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['85%'], ['85%']);
  const renderBackdrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (backdropProps: any) => (
      <BottomSheetBackdrop
        {...backdropProps}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current?.present();
      handleChangeVisibleA(false);
    }
  }, [visible]);

  const [textSearch, setTextSearch] = useState<string>('');

  const {data, isLoading} = useSWR<IMovie[]>(
    `Search_Movie_${textSearch}`,
    async () => handleSearchMovie(textSearch),
  );

  const handleChooseMovie = useCallback((item: IMovie) => {
    handleChangeMovieA(item);
    bottomSheetModalRef.current?.close();
  }, []);
  const renderItem = useCallback(({item}: {item: IMovie}) => {
    return (
      <ItemMovieSearchComponent
        item={item}
        hanldleChangeMovie={handleChooseMovie}
      />
    );
  }, []);
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      handleComponent={null}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.BLACK01,
          borderTopEndRadius: 14,
          borderTopLeftRadius: 14,
        }}>
        <View
          style={{
            height: 20,
            backgroundColor: colors.YELLOW,
            width: sizeApp.WIDTH,
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
          }}
        />
        <View style={{paddingHorizontal: 16, flex: 1, paddingTop: 16}}>
          <TextInput
            onChangeText={Text => setTextSearch(Text)}
            style={{
              borderWidth: 1,
              borderColor: colors.WHITE,
              padding: 14,
              borderRadius: 35,
              color: colors.WHITE,
              marginVertical: 8,
            }}
            placeholder="Search movie"
            placeholderTextColor={colors.GRAY}
          />
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              {isLoading ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator color={colors.BLACK} />
                </View>
              ) : (
                <View style={{flex: 1}}>
                  {data?.length !== 0 ? (
                    <View>
                      <FlatList data={data} renderItem={renderItem} />
                    </View>
                  ) : (
                    <View style={{flex: 1}}>
                      {textSearch.length !== 0 && (
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text variant="Medium1" style={{color: colors.GRAY}}>
                            No movie {textSearch}
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSearchMovieA;
