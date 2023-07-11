import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../../../components/AppButton/AppButton';
import {styles} from './Header.styles';

interface HeaderProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Header: FC<HeaderProps> = ({active, setActive}) => {
  const handleSwitch = () => {
    setActive(!active);
  };

  return (
    <View style={styles.headerContainer}>
      <AppButton
        title="List"
        containerStyle={[
          styles.headerButton,
          active ? styles.activeHeaderButton : null,
        ]}
        textStyle={styles.headerButtonText}
        onPress={handleSwitch}
        icon={<Icon name="list" size={24} color={active ? 'black' : 'gray'} />}
      />

      <AppButton
        title="Map"
        containerStyle={[
          styles.headerButton,
          !active ? styles.activeHeaderButton : null,
        ]}
        textStyle={styles.headerButtonText}
        onPress={handleSwitch}
        icon={<Icon name="map" size={24} color={!active ? 'black' : 'gray'} />}
      />
    </View>
  );
};

export default Header;
