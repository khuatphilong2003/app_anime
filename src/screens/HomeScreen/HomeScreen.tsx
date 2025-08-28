import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {styleApp} from '#/themes/styles';
import TitleComponent from '#/components/TitleComponent';

import QuizComponent from './Components/QuizComponent';
import CompanreComponent from './Components/CompanreComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styleApp.flexPadding}>
        <TitleComponent title="Mini game" />

        <View
          style={{
            flex: 1,
            paddingVertical: 32,
          }}>
          <View style={{flex: 1}}>
            <QuizComponent />
          </View>
          <View style={{flex: 1, marginVertical: 16}}>
            <CompanreComponent />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
