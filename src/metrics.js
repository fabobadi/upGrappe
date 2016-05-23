import { Dimensions, Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const { height, width } = Dimensions.get('window');

export default {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
  NAVBAR_HEIGHT: IS_ANDROID ? 54 : 64,
};
