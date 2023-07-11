import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StackNavigationOptions} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import {AppText} from '../../components/AppText/AppText';
import {SCREENS_PADDING} from '../../utils/ScreenUtils';

export type NavigationHeaderProps = {
  navigation: NavigationProp<Record<string, unknown>>;
};
export type NavigationHeaderReturnValue = NativeStackNavigationOptions &
  StackNavigationOptions;

export const ProductsNavigationHeader = ({
  navigation,
}: NavigationHeaderProps) => {
  return {
    headerShown: true,
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerStyle: {backgroundColor: 'white'},
    headerTitle: 'Mosques',
    cardOverlayEnabled: true,
    headerTitleStyle: {},
    headerLeftContainerStyle: {
      padding: SCREENS_PADDING.horizontal,
    },
    headerRightContainerStyle: {
      padding: SCREENS_PADDING.horizontal,
    },
    headerShadowVisible: false,
    headerLeft: () =>
      navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AppText color="blue">{'<'}</AppText>
        </TouchableOpacity>
      ),
  } as NavigationHeaderReturnValue;
};
