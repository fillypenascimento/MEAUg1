import React, { useState } from 'react';
import { Text, Button, TextInput, Alert } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import apiLogin from '../../API/apiLogin';

const Login = (props) => {
  const { navigation } = props;

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

    apiLogin(username, password, setLoading);

    return true;
  };

  return (
    <LayoutDrawer navigation={navigation} name="Login">
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
