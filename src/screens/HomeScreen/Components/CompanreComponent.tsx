import {View, TouchableOpacity, Image} from 'react-native';
import React, {useCallback} from 'react';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {sizeApp} from '#/themes/styles';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';

const CompanreComponent = () => {
  const navigation = useNavigation<StackParamsType>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(Screens.CompareMovieScreen);
  }, [navigation]);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.TRANSION,
        padding: 16,
        borderRadius: 8,
        height: '100%',
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: 'rgba(0,0,0,0.7)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.7)',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text variant="BOLD5" style={{textAlign: 'center', marginRight: 8}}>
          Battle Movie
        </Text>
        <TouchableOpacity
          onPress={handleNavigation}
          style={{
            backgroundColor: colors.PINK,
            borderRadius: 35,
            padding: 8,
            marginTop: 16,
            alignItems: 'center',
          }}>
          <Text variant="Medium1" style={{color: colors.WHITE}}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{height: sizeApp.WIDTH / 4, width: sizeApp.WIDTH / 4}}
        source={{
          uri: 'IconVS',
        }}
      />
    </View>
  );
};

export default CompanreComponent;
