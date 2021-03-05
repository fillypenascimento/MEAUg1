import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default (callBack) => {
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/user/${uid}/data`);

  const listener = ref.on('value', (snapshot) => {
    if (snapshot.val()) {
      callBack(snapshot.val());
    }
  });

  return () => {
    ref.off('value', listener);
  };
};
