import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default (username, password, setLoading) => {
  setLoading(true);
  database()
    .ref(`/username/${username.trim()}`)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        const email = snapshot.val();
        auth()
          .signInWithEmailAndPassword(email, password.trim())
          .then(() => {})
          .catch((error) => {
            Alert.alert(error.message);
            setLoading(false);
          });
      } else {
        Alert.alert('Usuário Não exite');
        setLoading(false);
      }
    })
    .catch((error) => {
      Alert.alert(error.message);
      setLoading(false);
    });
};
