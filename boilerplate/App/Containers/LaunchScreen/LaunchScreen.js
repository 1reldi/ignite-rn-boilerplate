import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HELLO WORLD</Text>
      </View>
    );
  }
}

export default LaunchScreen;
