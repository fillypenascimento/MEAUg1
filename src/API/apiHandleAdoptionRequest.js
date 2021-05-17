


import React from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import getCurrentUserOnce from './getCurrentUserOnce';


export const refuse = (notificationId) => {
  const uid = auth().currentUser.uid;

  database()
  .ref(`/user/${uid}/notifications/data/${notificationId}`)
  .remove();
  
}

export const accept = (notificationId, notification) => {
  const uid = auth().currentUser.uid;

  database()
  .ref(`/user/${uid}/notifications/data/${notificationId}`)
  .remove();

  database()
  .ref(`/animal/${notification.aboutPet}`)
  .update({registerType: "adopted", ownerId: notification.fromUser});

  database()
  .ref(`user/${uid}/animals/${notification.aboutPet}`)
  .remove();

  database()
  .ref(`user/${notification.fromUser}/animals`)
  .update({[notification.aboutPet]: true});

}