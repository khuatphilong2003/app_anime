import {View, Linking, SafeAreaView} from 'react-native';
import React, {useCallback} from 'react';
import InAppReview from 'react-native-in-app-review';
import {styleApp} from '#/themes/styles';
import {Text} from '#/themes';
import {colors} from '#/themes/colors';
import ButtonComponent from './Components/ButtonComponent';

const SettingScreen = () => {
  const handleFeeback = useCallback(() => {
    Linking.openURL('https://miktomabox.pages.dev');
  }, []);
  const handlePolicy = useCallback(() => {
    Linking.openURL('https://miktomabox.pages.dev/policy');
  }, []);
  const handleRate = useCallback(async () => {
    InAppReview.RequestInAppReview();
  }, []);
  return (
    <SafeAreaView style={styleApp.flex1}>
      <View style={styleApp.flex1}>
        <View style={{alignItems: 'center'}}>
          <Text variant="BOLD1" style={{color: colors.WHITE}}>
            Setting
          </Text>
        </View>
        <View style={{paddingHorizontal: 16, paddingTop: 32}}>
          <ButtonComponent title="Rate our application" onPress={handleRate} />
          <ButtonComponent title="Privacy Policy" onPress={handlePolicy} />
          <ButtonComponent
            title="Feedback and Report"
            onPress={handleFeeback}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
