import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {RootBottomNavigationParamLists, Screens} from './type';
import HomeScreen from '#/screens/HomeScreen';
import MovieScreen from '#/screens/MovieScreen';
import FavoriteScreen from '#/screens/FavoriteScreen';
import NoteScreen from '#/screens/NoteScreen';
import SettingScreen from '#/screens/SettingScreen';

const Tab = createBottomTabNavigator<RootBottomNavigationParamLists>();

const ICONS = {
  [Screens.HomeScreen]: {default: 'IconHome', focused: 'IconHomeChoose'},
  [Screens.MovieScreen]: {default: 'IconMovie', focused: 'IconMovieChoose'},
  [Screens.NoteScreen]: {default: 'IconNote', focused: 'IconNoteChoose'},
  [Screens.FavoriteScreen]: {
    default: 'IconFavorite',
    focused: 'IconFavoriteChoose',
  },
  [Screens.SettingScreen]: {
    default: 'IconSetting',
    focused: 'IconSettingChoose',
  },
};

const RootBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Image
            source={{
              uri: focused
                ? ICONS[route.name].focused
                : ICONS[route.name].default,
            }}
            style={
              route.name === Screens.MovieScreen
                ? styles.iconMovie
                : styles.iconSize
            }
          />
        ),
      })}>
      <Tab.Screen name={Screens.HomeScreen} component={MovieScreen} />
      <Tab.Screen name={Screens.MovieScreen} component={HomeScreen} />
      <Tab.Screen name={Screens.FavoriteScreen} component={FavoriteScreen} />
      <Tab.Screen name={Screens.NoteScreen} component={NoteScreen} />
      <Tab.Screen name={Screens.SettingScreen} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default RootBottomNavigation;

const styles = StyleSheet.create({
  iconSize: {
    height: 24,
    width: 24,
  },
  iconMovie: {
    height: 23,
    width: 19.21,
  },
});
