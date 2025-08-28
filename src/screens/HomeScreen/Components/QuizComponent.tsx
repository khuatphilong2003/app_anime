import {View, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {colors} from '#/themes/colors';
import {sizeApp} from '#/themes/styles';
import {Text} from '#/themes';
import {useNavigation} from '@react-navigation/native';
import {Screens, StackParamsType} from '#/navigations/type';

const QuizComponent = () => {
  const navigation = useNavigation<StackParamsType>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(Screens.QuizMovieScreen);
  }, [navigation]);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.PINK,
        padding: 16,
        borderRadius: 8,
        height: '100%',
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: colors.GRAY,
        borderBottomWidth: 2,
        borderBottomColor: colors.GRAY,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text variant="BOLD5" style={{textAlign: 'center', marginRight: 8}}>
          Game Quiz Movie
        </Text>
        <TouchableOpacity
          onPress={handleNavigation}
          style={{
            backgroundColor: colors.WHITE,
            borderRadius: 35,
            padding: 8,
            marginTop: 16,
            alignItems: 'center',
          }}>
          <Text variant="Medium1" style={{color: colors.PINK}}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{height: sizeApp.WIDTH / 4, width: sizeApp.WIDTH / 4}}
        source={{
          uri: 'IconCup',
        }}
      />
    </View>
  );
};

export default QuizComponent;
