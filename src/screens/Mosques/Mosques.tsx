import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './Mosques.styles';
import ListMosques from './components/ListMosques/ListMosques';
import MapMosques from './components/MapMosques/MapMosques';
import Header from './components/Header/Header';

export const Mosques = () => {
  const [activeView, setActiveView] = useState(true);

  const handleSwitchView = () => {
    setActiveView(!activeView);
  };

  return (
    <View style={styles.container}>
      <Header active={activeView} setActive={handleSwitchView} />
      {activeView ? <ListMosques /> : <MapMosques />}
    </View>
  );
};
