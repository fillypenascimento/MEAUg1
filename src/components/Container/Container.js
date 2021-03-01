import React from 'react';
import { View } from 'react-native';

import styles from './style';

const Container = (props) => {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
};

export default Container;
