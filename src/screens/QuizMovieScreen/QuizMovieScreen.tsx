import {View, SafeAreaView, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {sizeApp, styleApp} from '#/themes/styles';
import {useNavigation} from '@react-navigation/native';
import {StackParamsType} from '#/navigations/type';
import {IQuiz} from '#/types';
import {listQuiz} from '#/exports/listQuiz';
import ItemOptionComponent from './Components/ItemOptionComponent';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';

const QuizMovieScreen = () => {
  const navigation = useNavigation<StackParamsType>();
  const [countQuiz, setCountQuiz] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const [check, setCheck] = useState<string>('IconClose');
  const [win, setWin] = useState<boolean>(false);
  const cureentQuiz = useMemo((): IQuiz => {
    return listQuiz[countQuiz];
  }, [countQuiz]);
  const handleChangeCountQuiz = useCallback(
    (answer: string) => {
      if (answer.toLowerCase() === cureentQuiz.answer.toLowerCase()) {
        setCheck('IconTick');
        setStatus(true);
        if (countQuiz == listQuiz.length - 1) {
          setWin(true);
          setStatus(false);

          return;
        }
        setTimeout(() => {
          setCountQuiz(prev => prev + 1);
          setStatus(false);
        }, 1000);
      } else {
        setCheck('IconClose');
        setStatus(true);
        setTimeout(() => {
          setStatus(false);
        }, 1000);
      }
    },
    [cureentQuiz],
  );
  const handleHome = useCallback(() => {
    setWin(false);
    navigation.goBack();
  }, [navigation]);
  const handleRestart = useCallback(() => {
    setWin(false);
    setCountQuiz(0);
  }, []);
  return (
    <>
      <SafeAreaView style={styleApp.flex1}>
        <View style={styleApp.flexPadding}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={{
                  uri: 'IconLeft',
                }}
                style={{
                  height: 24,
                  width: 24,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 32, alignItems: 'center'}}>
            <Image
              source={{
                uri: cureentQuiz.image,
              }}
              style={{
                width: sizeApp.WIDTH * 0.4,
                height: sizeApp.WIDTH * 0.4 + 100,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginBottom: 32}}>
            <Text
              variant="Medium1"
              style={{textAlign: 'center', color: colors.PINK}}>
              {cureentQuiz.question}
            </Text>
          </View>

          <View>
            {cureentQuiz.options.map(item => {
              return (
                <ItemOptionComponent
                  item={item}
                  handleChangeCountQuiz={handleChangeCountQuiz}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
      {status && (
        <View
          style={{
            height: sizeApp.HEIGHT,
            width: sizeApp.WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor:
              check === 'IconClose'
                ? 'rgba(204, 139, 135, 0.5)'
                : colors.TRANSION,
          }}>
          <Image
            source={{
              uri: check,
            }}
            tintColor={check === 'IconClose' ? 'red' : 'green'}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </View>
      )}
      <Modal
        visible={win}
        transparent={true}
        onRequestClose={() => setWin(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <View
            style={{
              width: sizeApp.WIDTH - 32,
              backgroundColor: colors.PINK,
              borderRadius: 8,
              padding: 16,
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'IconCup',
              }}
              style={{
                width: 112,
                height: 112,
              }}
            />

            <Text variant="BOLD1" style={{marginTop: 32, marginBottom: 16}}>
              You Win
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.TRANSION,
                  flex: 1,
                  borderRadius: 25,
                  alignItems: 'center',
                  paddingVertical: 8,
                  marginRight: 16,
                }}
                onPress={handleRestart}>
                <Text variant="Medium1" style={{color: colors.GRAY}}>
                  Restart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleHome}
                style={{
                  backgroundColor: colors.WHITE,
                  flex: 1,
                  borderRadius: 25,
                  alignItems: 'center',
                  paddingVertical: 8,
                }}>
                <Text variant="Medium1" style={{color: colors.PINK}}>
                  Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default QuizMovieScreen;
