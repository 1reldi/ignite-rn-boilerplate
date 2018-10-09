/*global someFunction __DEV__:true*/
import { Text, Platform, UIManager } from 'react-native';
import AppConfig from './AppConfig';
import Api from './Api';
import Strings from './Strings';

// Allow/disallow font-scaling in app
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(
    AppConfig.setLayoutAnimationEnabled
  );
}

if (!__DEV__) {
  console.log = () => {};
}

export { AppConfig, Api, Strings };
