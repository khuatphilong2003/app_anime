import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  configureFonts,
  useTheme,
} from 'react-native-paper';
import {customText} from 'react-native-paper';
import {MD3Type} from 'react-native-paper/lib/typescript/types';
import {colors} from './colors';
import {fonts} from '#/assets/fonts/fonts';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});
type TextVariant =
  | 'BOLD1'
  | 'BOLD2'
  | 'BOLD3'
  | 'BOLD4'
  | 'BOLD5'
  | 'Medium1'
  | 'Medium2'
  | 'Medium3'
  | 'SubHeadline0'
  | 'SubHeadline1'
  | 'SubHeadline2'
  | 'Body1'
  | 'Body2'
  | 'Captions';

export const TextVariantConfig: Record<TextVariant, MD3Type> = {
  BOLD1: {
    fontWeight: undefined,
    fontSize: 24,
    lineHeight: 29,
    fontFamily: fonts.BOLD,
    letterSpacing: 0,
  },
  BOLD2: {
    fontWeight: undefined,
    fontSize: 22,
    lineHeight: 30,
    fontFamily: fonts.BOLD,
    letterSpacing: 0,
  },
  BOLD3: {
    fontWeight: undefined,
    fontSize: 16,
    lineHeight: 32,
    fontFamily: fonts.BOLD,
    letterSpacing: 0,
  },
  BOLD4: {
    fontWeight: undefined,
    fontSize: 18,
    lineHeight: 23,
    fontFamily: fonts.BOLD,
    letterSpacing: 0,
  },
  BOLD5: {
    fontWeight: undefined,
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.BOLD,
    letterSpacing: 0,
  },
  Medium1: {
    fontWeight: undefined,
    fontSize: 24,
    lineHeight: 29,
    fontFamily: fonts.MEDIUM,
    letterSpacing: 0,
  },
  Medium2: {
    fontWeight: undefined,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: fonts.MEDIUM,
    letterSpacing: 0,
  },
  Medium3: {
    fontWeight: undefined,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: fonts.MEDIUM,
    letterSpacing: 0,
  },
  SubHeadline0: {
    fontWeight: undefined,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.SEMIBOLD,
    letterSpacing: 0,
  },
  SubHeadline1: {
    fontWeight: undefined,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: fonts.SEMIBOLD,
    letterSpacing: 0,
  },
  SubHeadline2: {
    fontWeight: undefined,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'System',
    letterSpacing: 0,
  },
  Body1: {
    fontWeight: undefined,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'System',
    letterSpacing: 0,
  },
  Body2: {
    fontWeight: undefined,
    fontSize: 13,
    lineHeight: 22,
    fontFamily: 'System',
    letterSpacing: 0,
  },
  Captions: {
    fontWeight: undefined,
    fontSize: 12,
    lineHeight: 14.25,
    fontFamily: 'System',
    letterSpacing: 0,
  },
};

export const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  fonts: configureFonts({
    config: TextVariantConfig,
  }),
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    // https://reactnavigation.org/docs/themes/
    primary: colors.BLACK,
    primaryContainer: '#1c1c1e',
    background: colors.BLACK,
    card: colors.BLACK,
    border: colors.BLACK,
    //
    onPrimary: '#ffffff',
    onSurfaceVariant: '#0A84FF', // iconColor of the button
    //
    tertiaryContainer: '#7676803D',
    // Custom
    secondaryContainer: '#2C2C2E',
    labelSecondary: '#EBEBF599',
    labelPrimary: '#636366',
    orange: '#FF9F0A',
  },
};

export type AppTheme = typeof CombinedDarkTheme;

export const useAppTheme = () => useTheme<AppTheme>();

export const Text = customText<TextVariant>();
