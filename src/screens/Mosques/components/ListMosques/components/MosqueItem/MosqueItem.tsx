import React, {useCallback} from 'react';
import {View} from 'react-native';
import {AppText} from '../../../../../../components/AppText/AppText';
import {styles} from './MosqueItem.styles';

interface MosqueItemProps {
  item: MosqueType;
}

const MosqueItem: React.FC<MosqueItemProps> = React.memo(({item}) => {
  const renderMosqueItem = useCallback(() => {
    return (
      <View style={styles.container}>
        <AppText style={styles.masjidName}>{item.masjidName}</AppText>
        <AppText style={styles.address}>{item.masjidAddress.street}</AppText>
      </View>
    );
  }, [item]);

  return renderMosqueItem();
});
export default MosqueItem;
