import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

import uploadPhoto from './uploadPhoto';

export default async (userDate, img, setLoading, navigation) => {
  setLoading(true);
  const uid = auth().currentUser.uid;
  if (img) {
    const photoURL = await uploadPhoto(img, uid);
    userDate.photoURL = photoURL;
  }
  database().ref(`/user/${uid}/data`).update(userDate);
  setLoading(false);
  const popAction = StackActions.pop(1);
  navigation.dispatch(popAction);
};
