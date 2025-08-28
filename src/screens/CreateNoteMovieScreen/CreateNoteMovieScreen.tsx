import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  RootStackNavigationParamLists,
  Screens,
  StackParamsType,
} from '#/navigations/type';
import {baseImg} from '#/utils/baseImg';
import {sizeApp, styleApp} from '#/themes/styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '#/themes/colors';
import {Text} from '#/themes';
import {fonts} from '#/assets/fonts/fonts';
import Realm from 'realm';
import {INote} from '#/types';
import {NoteSchema} from '#/models/Note.model';
import {useRealm} from '#/configs/realm.config';

type DataProps = RouteProp<
  RootStackNavigationParamLists,
  Screens.CreateNoteMovieScreen
>;

const CreateNoteMovieScreen = () => {
  const route = useRoute<DataProps>();
  const [note, setNote] = useState<string>('');
  const {idMovie, image, title} = route.params;
  const realm = useRealm();
  const navigation = useNavigation<StackParamsType>();
  const handleNote = useCallback(() => {
    const objNote: INote = {
      id: new Realm.BSON.ObjectId(),
      idMovie: idMovie,
      note: note,
      image: image,
    };
    NoteSchema.handleAddNote(realm, objNote);
    navigation.navigate(Screens.RootBottom,{
      screen: Screens.HomeScreen
    });
  }, [idMovie, note, image]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        blurRadius={5}
        source={{
          uri: `${baseImg.w500}/${image}`,
        }}
        style={styleApp.flex1}>
        <LinearGradient
          colors={[colors.BLACK, colors.TRANSION]}
          style={{
            flex: 1,
          }}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 0,
            y: 0,
          }}>
          <SafeAreaView style={styleApp.flex1}>
            <View style={styleApp.flexPadding}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={{
                      uri: 'IconLeft',
                    }}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNote}>
                  <Image
                    source={{
                      uri: 'IconTick',
                    }}
                    style={{
                      width: 16.75,
                      height: 12.57,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{alignItems: 'center'}}>
                <Text variant="BOLD1" style={{color: colors.WHITE}}>
                  {title}
                </Text>
              </View>
              <View style={{alignItems: 'center', marginVertical: 32}}>
                <Image
                  source={{
                    uri: `${baseImg.w300}/${image}`,
                  }}
                  style={{
                    height: sizeApp.HEIGHT * 0.3,
                    width: sizeApp.WIDTH * 0.4,
                    borderRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.GRAY03,
                  padding: 16,
                  borderRadius: 12,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text variant="Medium1">Note</Text>
                </View>
                <View style={{flex: 1, marginTop: 16}}>
                  <TextInput
                    onChangeText={Text => setNote(Text)}
                    multiline
                    placeholder="Enter text here"
                    placeholderTextColor={colors.WHITE}
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.MEDIUM,
                      color: 'white',
                    }}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default CreateNoteMovieScreen;
