import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { StackActions } from '@react-navigation/native';

import styles from './style';

const LayoutStack = (props) => {
  const { children, navigation, name } = props;
  const popAction = StackActions.pop(1);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.line}>
        <TouchableHighlight
          style={styles.text}
          onPress={() => navigation.dispatch(popAction)}
          activeOpacity={0.9}
          underlayColor="rgba(255, 255, 255, 0.2)"
        >
          <Text>Voltar</Text>
        </TouchableHighlight>
        <Text style={styles.routeName}>Rota: {name}</Text>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default LayoutStack;
