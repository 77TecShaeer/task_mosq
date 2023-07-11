import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Mosques} from '../../screens/Mosques/Mosques';
import {ProductsNavigationHeader} from '../screenOptions/NavigationHeader';

export type ProductStackParams = {
  Mosques: NavigatorScreenParams<undefined>;
};

const ProductsStack = createNativeStackNavigator<ProductStackParams>();

const HomeNavigator = () => {
  return (
    <ProductsStack.Navigator screenOptions={ProductsNavigationHeader}>
      <ProductsStack.Screen name="Mosques" component={Mosques} />
    </ProductsStack.Navigator>
  );
};

export default HomeNavigator;
