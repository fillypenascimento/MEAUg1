import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const LoggedDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Loggout" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
};

export default LoggedDrawerContent;
