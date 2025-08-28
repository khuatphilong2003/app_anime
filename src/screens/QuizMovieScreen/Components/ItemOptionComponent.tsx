import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';

interface DataProps {
  item: string;
  handleChangeCountQuiz: (anse: string) => void;
}

const ItemOptionComponent = ({item, handleChangeCountQuiz}: DataProps) => {
  return (
    <TouchableOpacity
    onPress={()=>handleChangeCountQuiz(item)}
      key={item}
      style={{
        borderWidth: 1,
        borderColor: colors.WHITE,
        marginBottom: 10,
        padding: 16,
        borderRadius: 35,
        alignItems: 'center',
      }}>
      <Text variant="Medium2">{item}</Text>
    </TouchableOpacity>
  );
};

export default ItemOptionComponent;
