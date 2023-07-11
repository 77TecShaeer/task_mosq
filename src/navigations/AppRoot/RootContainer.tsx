import React from 'react';
import RootNavigator from '../navigators/RootNavigator';
import RootProvider from './RootProvider';

const RootContainer = () => {
  return (
    <RootProvider>
      <RootNavigator />
    </RootProvider>
  );
};

export default RootContainer;
