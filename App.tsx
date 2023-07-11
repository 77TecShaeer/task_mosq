import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import RootContainer from './src/navigations/AppRoot/RootContainer';

const App = () => {
  return (
    <NavigationContainer>
      <RootContainer />
    </NavigationContainer>
  );
};

export default App;
