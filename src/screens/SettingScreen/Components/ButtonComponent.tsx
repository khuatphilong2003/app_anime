import {Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '#/themes';
import { colors } from '#/themes/colors';

interface DataProps {
    title: string;
    onPress: ()=>void;
}

const ButtonComponent = ({title,onPress}:DataProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    >
      <Text variant='Medium2'>{title}</Text>
      <Image
      source={{
        uri:'IconRight'
      }}
      style={{
        height:15,
        width:7.5
      }}
      />
    </TouchableOpacity>
  )
}

export default ButtonComponent
const styles = StyleSheet.create(
    {
        container: {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            borderBottomWidth:1,
            borderBottomColor:colors.GRAY02,paddingBottom:16,
            marginBottom:16
        }
    }
)