import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './EmptyMosques.styles';
import {AppText} from '../../../../components/AppText/AppText';

export const EmptyMosques: FC = () => {
  return (
    <View style={styles.container}>
      <AppText>No Mosques Found</AppText>
    </View>
  );
};
