import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Metrics } from 'Themes';

const Content = ({ loading, text, buttonText }) => {
  if (loading) {
    return (
      <ActivityIndicator size="small" color={buttonText.color || '#fff'} />
    );
  }

  return <Text style={buttonText}>{text || ''}</Text>;
};

class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    buttonText: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    centerText: PropTypes.bool,
    hitSlop: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    roundButton: PropTypes.bool
  };

  getHitSlop = hitSlop => {
    if (Number.isInteger(hitSlop)) {
      return Metrics.defaultHitSlop(hitSlop);
    }
    return hitSlop;
  };

  empty = () => {};

  render() {
    const {
      style,
      onPress,
      text,
      buttonText,
      centerText,
      hitSlop,
      loading,
      disabled,
      roundButton
    } = this.props;

    const hitSlopButton = hitSlop && this.getHitSlop(hitSlop);

    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress || this.empty}
          hitSlop={Number.isInteger(hitSlop) ? {} : hitSlop}
          disabled={disabled}
        >
          <View style={[style, centerText && styles.centerText]}>
            <Content buttonText={buttonText} text={text} loading={loading} />
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity
        style={[style, centerText && styles.centerText]}
        onPress={onPress || this.empty}
        hitSlop={hitSlopButton}
        disabled={disabled}
      >
        <Content buttonText={buttonText} text={text} loading={loading} />
      </TouchableOpacity>
    );
  }
}

export { Button };
