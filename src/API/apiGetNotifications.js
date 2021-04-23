import React from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import getCurrentUserOnce from './getCurrentUserOnce';


export default (callback) => {
  const uid = auth().currentUser.uid;

  database()
  .ref(`/user/${uid}/notifications`)
  .on('value', (snapshot) => {
    callback(snapshot.val());
  });
  
}