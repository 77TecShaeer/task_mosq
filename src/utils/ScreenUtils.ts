import {Dimensions, PixelRatio, Platform} from 'react-native';

//Figma dimensions
export const FIGMA_LOGIC_DIMENSIONS = {
  WIDTH: 360,
  HEIGHT: 779,
};

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / FIGMA_LOGIC_DIMENSIONS.WIDTH;
const hscale: number = SCREEN_HEIGHT / FIGMA_LOGIC_DIMENSIONS.HEIGHT;

const W_FACTOR = wscale * (wscale < 0.9 ? 0.9 : 1);
const H_FACTOR = hscale * (hscale < 0.9 ? 0.9 : 1);

export type ResponsiveBased = 'width' | 'height';

export const appResponsiveText = (size: number) => {
  const factor = size * (W_FACTOR < H_FACTOR ? W_FACTOR : H_FACTOR);

  return factor;
};

const appResponsiveSize = (size: number, based: ResponsiveBased = 'width') => {
  const newSize = based === 'height' ? size * H_FACTOR : size * W_FACTOR;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const SCREENS_PADDING = {
  horizontal: appResponsiveSize(16),
  top: appResponsiveSize(24, 'height'),
};

export const SCREENS_HORIZONTAL_PADDING = appResponsiveSize(20);

export default appResponsiveSize;
