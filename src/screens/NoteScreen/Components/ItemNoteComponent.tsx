import {Image, TouchableOpacity, View} from 'react-native';
import React, { useCallback } from 'react';
import {INote} from '#/types';
import {Text} from '#/themes';
import {sizeApp} from '#/themes/styles';
import {baseImg} from '#/utils/baseImg';
import {colors} from '#/themes/colors';
import { useNavigation } from '@react-navigation/native';
import { Screens, StackParamsType } from '#/navigations/type';

interface DataProps {
  item: INote;
}

const ItemNoteComponent = ({item}: DataProps) => {
    const navigation = useNavigation<StackParamsType>();;
    const hanleNote = useCallback(() => {
        navigation.navigate(Screens.NoteDetailScreen, {
         itemNote: item
        });
      }, [navigation, item]);
  return (
    <TouchableOpacity
      onPress={hanleNote}
      style={{
        width: sizeApp.WIDTH - 32,
        borderRadius: 8,
        backgroundColor: colors.BLACK01,
        paddingHorizontal: 16,
        height: sizeApp.HEIGHT - 240,
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 32,
      }}>
      <Image
        source={{
          uri: `${baseImg.w300}/${item.image}`,
        }}
        style={{
          width: sizeApp.WIDTH * 0.7,
          height: sizeApp.HEIGHT * 0.4,
          marginVertical: 32,
          borderRadius: 16,
        }}
      />
      <View>
        <Text variant="Medium2" style={{textAlign: 'center'}}>
          {item.note}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemNoteComponent;
