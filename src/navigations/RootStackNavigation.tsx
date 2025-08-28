import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigationParamLists, Screens} from './type';
import DetailMovieScreen from '#/screens/DetailMovieScreen';
import RootBottomNavigation from './RootBottomNavigation';
import CreateNoteMovieScreen from '#/screens/CreateNoteMovieScreen';
import NoteDetailScreen from '#/screens/NoteDetailScreen/NoteDetailScreen';
import QuizMovieScreen from '#/screens/QuizMovieScreen';
import CompareMovieScreen from '#/screens/CompareMovieScreen';

const RootStackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackNavigationParamLists>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.RootBottom}
        component={RootBottomNavigation}
      />
      <Stack.Screen
        name={Screens.DetailMovieScreen}
        component={DetailMovieScreen}
      />
      <Stack.Screen
        name={Screens.CreateNoteMovieScreen}
        component={CreateNoteMovieScreen}
      />
      <Stack.Screen
        name={Screens.NoteDetailScreen}
        component={NoteDetailScreen}
      />
      <Stack.Screen
        name={Screens.QuizMovieScreen}
        component={QuizMovieScreen}
      />
      <Stack.Screen
        name={Screens.CompareMovieScreen}
        component={CompareMovieScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
