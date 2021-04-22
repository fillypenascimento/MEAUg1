import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import uploadPhoto from './uploadPhoto';

export function getAllPets(setLoading, setPets) {
  setLoading(true);

  database()
    .ref(`/animal`)
    .once('value')
    .then(snapshot => {
      // const pets = snapshot.val() === null ? {} : snapshot.val();
      console.log("SNAPSHOT", snapshot.val());
      setPets(snapshot.val() === null ? {} : snapshot.val());
      setLoading(false);

      // return pets;
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
}



export function getMyPets(setLoading) {
  setLoading(true);

  // const userId = auth().currentUser.uid;
  // database()
  //   .ref(`/user/${userId}/animals`)
  //   .once('value')
  //   .then(async (snapshot) => {
  //     const userAnimals = snapshot.val() === null ? {} : snapshot.val();
  //     const newAnimalRef = database().ref('/animal').push();
  //     const petId = newAnimalRef.key;

  //     const photoURL = await uploadPhoto(petImg, 'animals', petId);
  //     petData.photoURL = photoURL;

  //     await newAnimalRef.set({
  //       registerType,
  //       data: petData,
  //       ownerId: userId,
  //     });

  //     database().ref(`/user/${userId}/animals`).set({...userAnimals, [petId]: true})
  //     .then(() => {
  //       setLoading(false);
  //       navigation.navigate('Home');
  //     });
  //   })
  //   .catch((error) => {
  //     Alert.alert(error.message);
  //     setLoading(false);
  //   });
  setLoading(false);
}
