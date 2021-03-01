import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const LoggedDrawerContent = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const uid = auth().currentUser.uid;
    database()
      .ref(`/user/${uid}/data`)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          setUser(snapshot.val());
        }
      });

    return () => database().ref(`/user/${uid}/data`).off();
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
