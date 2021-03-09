import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import colors from '../../BaseStyle/colors'

import styles from './style';

const LayoutDrawer = (props) => {
  const { children, navigation, name } = props;
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightBlueBox}}>
      <View style={styles.line}>
        <TouchableHighlight
          style={styles.text}
          onPress={() => navigation.toggleDrawer()}
          activeOpacity={0.9}
          underlayColor="rgba(255, 255, 255, 0.2)"
        >
          
          <Text>Menu</Text>
        </TouchableHighlight>
        <Text style={styles.routeName}>{name}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: colors.greyBackgroud }}>{children}</View>
    </View>
  );
};

export default LayoutDrawer;
