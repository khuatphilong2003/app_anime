import {View} from 'react-native';
import React, {useMemo} from 'react';
import {sizeApp} from '#/themes/styles';
import {colors} from '#/themes/colors';

interface DataProps {
  number1: number;
  number2: number;
}

const CompareMovieComponent = ({number1, number2}: DataProps) => {
  const getPercentage = useMemo((): string[] => {
    const total: number = number1 + number2;
    const aPercent = ((number1 / total) * 100).toFixed(0);
    const bPercent = ((number2 / total) * 100).toFixed(0);

    return [`${aPercent}%`, `${bPercent}%`];
  }, [number1, number2]);
  return (
    <View
      style={{
        height: 16,
        width: sizeApp.WIDTH - 40,
        backgroundColor: colors.BLUE,
        borderRadius: 8,
      }}>
      <View
        style={{
          width: getPercentage[0],
          height: 16,
          backgroundColor: colors.YELLOW,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default CompareMovieComponent;
