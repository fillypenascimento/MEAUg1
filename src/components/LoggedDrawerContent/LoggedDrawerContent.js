import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';

import getCurrentUserOn from '../../API/getCurrentUserOn';

const LoggedDrawerContent = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getCurrentUserOn(setUser);

    return unsubscribe;
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      {user && <Text>{user.name}</Text>}
      {user && <Image source={{ uri: user.photoURL }} style={{ width: 100, height: 100 }} />}
      <DrawerItemList {...props} />
      <DrawerItem label="Loggout" onPress={() => auth().signOut()} />
    </DrawerContentScrollView>
  );
};

export default LoggedDrawerContent;
