import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import AppNavigation from 'Navigation/AppNavigation';

import styles from './styles';

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <AppNavigation />
      </View>
    );
  }
}

export default RootContainer;

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = dispatch => ({
//   startup: () => dispatch(StartupActions.startup())
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(RootContainer);
