import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type RootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({children}: RootProviderProps) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default RootProvider;
