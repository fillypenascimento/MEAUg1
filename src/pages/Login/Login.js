import React, { useState } from 'react';
import { Text, Button, TextInput, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

const Login = (props) => {
  const { navigation, route } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const LoginForm = () => {
    if (loading) {
      return false;
    }

    if (password.trim().length < 6) {
      Alert.alert('A deve ter no minimo 6 caracteres');
      return false;
    }

    if (username.trim().includes(' ')) {
      Alert.alert('O username não pode ter espaço');
      return false;
    }

    if (username.trim().length < 4) {
      Alert.alert('O username não pode ser  menor que 4');
      return false;
    }

    setLoading(true);
    database()
      .ref(`/username/${username.trim()}`)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val()) {
          const email = snapshot.val();
          auth()
            .signInWithEmailAndPassword(email, password)
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

    return true;
  };

  return (
    <LayoutDrawer navigation={navigation} route={route}>
      <Container>
        <Text style={styles.text}>Login</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Usuário"
          style={{ marginVertical: 10 }}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
          style={{ marginVertical: 10 }}
          autoCapitalize="none"
          secureTextEntry
        />
        <Button title="Login" onPress={LoginForm} />
        {loading && <Text>Carregando...</Text>}
      </Container>
    </LayoutDrawer>
  );
};

export default Login;
