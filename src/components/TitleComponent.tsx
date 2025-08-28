import {View, StyleSheet} from 'react-native';
import React from 'react';
import {sizeApp} from '#/themes/styles';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';

interface DataProps {
  title: string;
  
}

const TitleComponent = ({title}: DataProps) => {
  return (
    <View style={styles.container}>
      <Text variant="BOLD1" style={{color: colors.WHITE}}>
        {title}
      </Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: sizeApp.WIDTH,
  },
});
