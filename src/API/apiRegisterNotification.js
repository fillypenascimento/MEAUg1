import React from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import getCurrentUserOnce from './getCurrentUserOnce';


export default (pet, petId, callback) => {
  const uid = auth().currentUser.uid;

  getCurrentUserOnce((user) => {
    database()
    .ref(`/user/${pet.ownerId}/notifications/visto`)
    .set(false);
  
    database()
    .ref(`/user/${pet.ownerId}/notifications/data`)
    .push({
      message: `${user.name} quer adotar ${pet.data.name}.`,
      fromUser: uid,
      aboutPet: petId,
      registerType: pet.registerType,
    });

    callback();
  })
}