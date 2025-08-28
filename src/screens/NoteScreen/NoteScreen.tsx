import {View, SafeAreaView, Image, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';
import {sizeApp, styleApp} from '#/themes/styles';
import {INote} from '#/types';
import {useQuery} from '#/configs/realm.config';
import {NoteSchema} from '#/models/Note.model';
import ItemNoteComponent from './Components/ItemNoteComponent';

const NoteScreen = () => {
  const listNote: INote[] = useQuery(NoteSchema) as never;
  const renderItem = useCallback(({item}: {item: INote}) => {
    return <ItemNoteComponent item={item} />;
  }, []);
  return (
    <SafeAreaView style={styleApp.flex1}>
      <View style={styleApp.flex1}>
        <View style={{alignItems: 'center'}}>
          <Text variant="BOLD1" style={{color: colors.WHITE}}>
            Note
          </Text>
        </View>
        <View style={{flex: 1}}>
          {listNote.length === 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'IconNoData',
                }}
                resizeMode="contain"
                style={{
                  height: sizeApp.WIDTH,
                  width: sizeApp.WIDTH - 100,
                }}
              />
            </View>
          ) : (
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listNote}
                renderItem={renderItem}
                decelerationRate={0}
                bounces={false}
                snapToInterval={sizeApp.WIDTH}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteScreen;
