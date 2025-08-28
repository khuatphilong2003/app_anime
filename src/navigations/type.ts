import { INote } from '#/types';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  HomeScreen = 'HomeScreen',
  FavoriteScreen = 'FavoriteScreen',
  MovieScreen = 'MovieScreen',
  NoteScreen = 'NoteScreen',
  SettingScreen = 'SettingScreen',
  DetailMovieScreen = 'DetailMovieScreen',
  RootBottom = 'RootBootm',
  CategoryScreen = 'CategoryScreen',
  CreateNoteMovieScreen = 'CreateNoteMovieScreen',
  NoteDetailScreen = 'NoteDetailScreen',
  QuizMovieScreen = 'QuizMovieScreen',
  CompareMovieScreen = 'CompareMovieScreen'
}

export type RootBottomNavigationParamLists = {
  [Screens.HomeScreen]: undefined;
  [Screens.FavoriteScreen]: undefined;
  [Screens.MovieScreen]: undefined;
  [Screens.NoteScreen]: undefined;
  [Screens.SettingScreen]: undefined;
};

export type RootStackNavigationParamLists = {
  [Screens.RootBottom]: NavigatorScreenParams<RootBottomNavigationParamLists>;
  [Screens.DetailMovieScreen]: {
    idMovie: number
  };

  
  [Screens.CreateNoteMovieScreen]: {
    idMovie: number;
    image: string;
    title: string;
  };
  [Screens.NoteDetailScreen]: {
    itemNote: INote
  };
  [Screens.QuizMovieScreen]: undefined;
  [Screens.CompareMovieScreen]: undefined;
  
};
declare global {
  namespace ReactNavigation {
    interface RootParamsList extends RootStackNavigationParamLists {}
  }
}

export type StackParamsType =
  NativeStackNavigationProp<RootStackNavigationParamLists>;

  export type BottomParamsType =
  NativeStackNavigationProp<RootBottomNavigationParamLists>;
