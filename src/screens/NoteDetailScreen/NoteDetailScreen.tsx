import { View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackNavigationParamLists, Screens, StackParamsType } from '#/navigations/type'
import { baseImg } from '#/utils/baseImg'
import { sizeApp, styleApp } from '#/themes/styles'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '#/themes/colors'
import { Text } from '#/themes'

type DataProps = RouteProp<RootStackNavigationParamLists,Screens.NoteDetailScreen>

const NoteDetailScreen = () => {
    const route = useRoute<DataProps>();
    const {itemNote} = route.params;
    const navigation = useNavigation<StackParamsType>()
  return (
    <View style={styleApp.flex1}>
          <ImageBackground
            blurRadius={5}
            source={{
              uri: `${baseImg.w500}/${itemNote.image}`,
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
                    
                  </View>
    
                  
                  <View style={{alignItems: 'center', marginVertical: 32}}>
                    <Image
                      source={{
                        uri: `${baseImg.w300}/${itemNote.image}`,
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
                      <Text variant='Medium3'>{itemNote.note}</Text>
                    </View>
                  </View>
                </View>
              </SafeAreaView>
            </LinearGradient>
          </ImageBackground>
        </View>
  )
}

export default NoteDetailScreen