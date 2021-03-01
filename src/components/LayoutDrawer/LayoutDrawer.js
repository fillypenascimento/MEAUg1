import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './style';

const LayoutDrawer = (props) => {
  const { children, navigation, route } = props;
  return (
    <View>
      <View style={styles.line}>
        <TouchableHighlight
          style={styles.text}
          onPress={() => navigation.toggleDrawer()}
          activeOpacity={0.9}
          underlayColor="rgba(255, 255, 255, 0.2)"
        >
          <Text>Menu</Text>
        </TouchableHighlight>
        <Text style={styles.routeName}>Rota: {route.name}</Text>
      </View>
      {children}
    </View>
  );
};

export default LayoutDrawer;
