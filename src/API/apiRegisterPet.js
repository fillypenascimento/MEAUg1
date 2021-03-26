import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import uploadPhoto from './uploadPhoto';

export default (registerType, petData, petImg, setLoading, navigation) => {
  setLoading(true);

  const userId = auth().currentUser.uid;
  database()
    .ref(`/user/${userId}/animals`)
    .once('value')
    .then(async (snapshot) => {
      const userAnimals = snapshot.val() === null ? {} : snapshot.val();
      const newAnimalRef = database().ref('/animal').push();
      const petId = newAnimalRef.key;

      const photoURL = await uploadPhoto(petImg, 'animals', petId);
      petData.photoURL = photoURL;

      await newAnimalRef.set({
        registerType,
        data: petData,
        ownerId: userId,
      });

      database().ref(`/user/${userId}/animals`).set({...userAnimals, [petId]: true})
      .then(() => {
        setLoading(false);
        navigation.navigate('Home');
      });
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
};
