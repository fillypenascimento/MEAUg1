import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import uploadPhoto from './uploadPhoto';

export default (username, password, userDate, img, setLoading) => {
  setLoading(true);
  database()
    .ref(`/username/${username.trim()}`)
    .once('value')
    .then((snapshot) => {
      if (!snapshot.val()) {
        auth()
          .createUserWithEmailAndPassword(userDate.email.trim(), password.trim())
          .then(async () => {
            const uid = auth().currentUser.uid;
            const photoURL = await uploadPhoto(img, uid);
            userDate.photoURL = photoURL;
            database().ref(`/username/${username.trim()}`).set(userDate.email.trim());
            database().ref(`/user/${uid}/data`).set(userDate);
          })
          .catch((error) => {
            Alert.alert(error.message);
            setLoading(false);
          });
      } else {
        Alert.alert('Usuário já exite');
        setLoading(false);
      }
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
};
