import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default (callBack) => {
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/user/${uid}/data`);

  ref.once('value').then((snapshot) => {
    if (snapshot.val()) {
      callBack(snapshot.val());
    }
  });
};
