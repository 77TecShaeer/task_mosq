import React, {FC, ReactNode} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
  View,
} from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const AppButton: FC<AppButtonProps> = ({
  title,
  containerStyle,
  textStyle,
  icon,
  ...rest
}) => {
  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      {icon && <View style={{marginRight: 8}}>{icon}</View>}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
