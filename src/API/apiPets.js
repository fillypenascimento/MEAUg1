import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function getAllPets(setLoading, setPets) {
  setLoading(true);

  database()
    .ref(`/animal`)
    .once('value')
    .then(snapshot => {
      console.log("SNAPSHOT", snapshot.val());

      snapshot.val() === null ? setPets({}) : setPets(snapshot.val());
      setLoading(false);
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
}



export function getMyPets(setLoading, setPets) {
  setLoading(true);

  database()
    .ref(`/animal`)
    .once('value')
    .then(snapshot => {
      const pets = snapshot.val() === null ? {} : snapshot.val();
      const uid = auth().currentUser.uid;

      // FILTERING AN OBJECT
      // Convert `pets` to a key/value array
      const petsAsArray = Object.entries(pets);
      // Use `filter()` to filter the key/value array
      const sameOwner = petsAsArray.filter(([key, value]) => value.ownerId === uid);
      // Convert the key/value array back to an object:
      const petsObj = Object.fromEntries(sameOwner);

      console.log("RESULT", petsObj);

      setPets(petsObj);
      setLoading(false);
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
}
