import { Text } from 'react-native';
import AppConfig from './AppConfig';

// Allow/disallow font-scaling in app
Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;
