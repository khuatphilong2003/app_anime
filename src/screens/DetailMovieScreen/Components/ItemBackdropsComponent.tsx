import {View, Image} from 'react-native';
import React from 'react';
import {IMovieImage} from '#/types';
import {baseImg} from '#/utils/baseImg';

interface DataProps {
  item: IMovieImage;
}

const ItemBackdropsComponent = ({item}: DataProps) => {
  return (
    <View>
      <Image
        source={{
          uri: `${baseImg.w300}/${item.file_path}`,
        }}
        style={{
          width: 250,
          height: 180,
          marginRight: 16,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default ItemBackdropsComponent;
