import {View, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IChannel} from '#/types';
import {sizeApp} from '#/themes/styles';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';

interface DataProps {
  item: IChannel;
}

const SIZE = sizeApp.WIDTH / 3 - 24;

const ItemFavoriteIptvComponent = ({item}: DataProps) => {
  const navigation = useNavigation<StackParamsType>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(Screens.VideoScreen, {
      url: item.url,
      listChannel: [],
      name: item.name,
      logo: item.logo,
    });
  }, [navigation, item]);
  return (
    <TouchableOpacity
    onPress={handleNavigation}
      style={{
        width: SIZE,
        marginRight: 16,
        borderRadius: 8,
        backgroundColor: colors.BLACK01,
        marginBottom: 16,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: item.logo,
        }}
        resizeMode="contain"
        style={{
          width: SIZE,
          height: 100,
          borderRadius: 8,
        }}
      />
      <View style={{paddingHorizontal: 8, paddingBottom: 8}}>
        <Text variant="Medium2" numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFavoriteIptvComponent;
