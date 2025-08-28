import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './RootStackNavigation';
import {ThemeProvider} from 'react-native-paper';
import {CombinedDarkTheme} from '#/themes';
import {RealmProvider} from '#/configs/realm.config';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const AppNavigation = () => {
  return (
    <ThemeProvider theme={CombinedDarkTheme}>
      <RealmProvider>
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <BottomSheetModalProvider>
              <NavigationContainer theme={CombinedDarkTheme}>
                <RootStackNavigation />
              </NavigationContainer>
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </RealmProvider>
    </ThemeProvider>
  );
};

export default AppNavigation;
