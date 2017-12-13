import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { fontFix, width, height, size } from '../lib/dimension';

export const SomeComponent = (props = {}) => {
  return (
    <View style={styles.container}>
      <Text> SomeComponent </Text>
    </View>
  );
};

SomeComponent.defaultProps = {

};
SomeComponent.propTypes = {};

const _getStyleProps = () => ({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SomeComponent;
