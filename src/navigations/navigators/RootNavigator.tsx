import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeNavigator from './MosquesNavigator';
export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigatorParams>;

export type RootNavigatorParams = {
  HomeNavigator: NavigatorScreenParams<undefined>;
};

export const RootStack = createNativeStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeNavigator'}>
      <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
