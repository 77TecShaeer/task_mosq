import {Text, Platform, TextStyle, TextProps} from 'react-native';

const isIos = Platform.OS === 'ios';

type FontWeight = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

interface AppTextProps extends TextProps {
  weight?: FontWeight;
  fontSize?: number;
  color?: string;
}

export const AppText: React.FC<AppTextProps> = ({
  weight = 'regular',
  fontSize = 16,
  color,
  children,
  ...props
}) => {
  const fontStyles: TextStyle = {
    fontSize,
    color,
    lineHeight: fontSize * 1.5,
    ...ThemeFont[weight],
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Text style={[props.style, fontStyles]} {...props}>
      {children}
    </Text>
  );
};

const ThemeFont: Record<FontWeight, TextStyle> = {
  light: {
    fontFamily: 'IBMPlexSansArabic-Light',
    fontWeight: isIos ? '300' : undefined,
  },
  regular: {
    fontFamily: 'IBMPlexSansArabic',
    fontWeight: isIos ? '400' : undefined,
  },
  medium: {
    fontFamily: 'IBMPlexSansArabic-Medm',
    fontWeight: isIos ? '500' : undefined,
  },
  semiBold: {
    fontFamily: 'IBMPlexSansArabic-SmBld',
    fontWeight: isIos ? '600' : undefined,
  },
  bold: {
    fontFamily: 'IBMPlexSansArabic-Bold',
    fontWeight: isIos ? '700' : undefined,
  },
};
