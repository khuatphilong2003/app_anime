import {Dimensions, StyleSheet} from 'react-native';

export const styleApp = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexPadding: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export const sizeApp = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};
