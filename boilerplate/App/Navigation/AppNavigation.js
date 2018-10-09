import { StackNavigator } from 'react-navigation';
import { LaunchScreen } from 'Containers';

import styles from './styles';

// Manifest of possible screens
const AppNavigation = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default AppNavigation;
