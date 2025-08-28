import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '#/themes';

interface DataProps {
  title: string;
  onPress: () => void;
}

const BackTitleComponent = ({title, onPress}: DataProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.containerButton}>
        <Image
          source={{
            uri: 'IconLeft',
          }}
          style={styles.sizeIcon}
        />
      </TouchableOpacity>
      <Text variant="Medium2">{title}</Text>
      <View style={styles.containerButton} />
    </View>
  );
};

export default BackTitleComponent;

const styles = StyleSheet.create({
  sizeIcon: {
    height: 24,
    width: 24,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  containerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});
