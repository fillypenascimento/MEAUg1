import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

const Register = (props) => {
  const { navigation, route } = props;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmatio, setPasswordConfirmation] = useState('');
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerForm = () => {
    if (loading) {
      return false;
    }

    if (password.trim() !== passwordConfirmatio.trim()) {
      Alert.alert('A senha e a confirmação devem ser iguais');
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

    if (email.trim().length < 0) {
      Alert.alert('Informe o email');
      return false;
    }

    if (!img) {
      Alert.alert('Carregue uma imagem');
      return false;
    }

    setLoading(true);
    database()
      .ref(`/username/${username.trim()}`)
      .once('value')
      .then((snapshot) => {
        if (!snapshot.val()) {
          auth()
            .createUserWithEmailAndPassword(email.trim(), password.trim())
            .then(async () => {
              const uid = auth().currentUser.uid;
              // const user = auth().currentUser;
              const storageRef = storage().refFromURL(`gs://meaug1.appspot.com/${uid}.jpeg`);
              await storageRef.putFile(img);
              const photoURL = await storageRef.getDownloadURL();
              database().ref(`/username/${username.trim()}`).set(email.trim());
              database().ref(`/user/${uid}/data`).set({
                name,
                email: email.trim(),
                username: username.trim(),
                age,
                uf,
                phone,
                city,
                photoURL,
              });
              // user.updateProfile({
              //   displayName: name,
              //   photoURL,
              // });
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

    return true;
  };

  const takeImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      useFrontCamera: true,
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImg(image.path);
    });
  };

  return (
    <LayoutDrawer navigation={navigation} route={route}>
      <ScrollView>
        <Container>
          <View style={{ paddingBottom: 20 }}>
            <Text style={styles.text}>Register</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Nome Completo"
              style={{ marginVertical: 10 }}
              autoCapitalize="words"
            />
            <TextInput
              value={age}
              onChangeText={(text) => setAge(text)}
              placeholder="Idade"
              style={{ marginVertical: 10 }}
              autoCapitalize="none"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={{ marginVertical: 10 }}
              autoCapitalize="none"
            />
            <TextInput
              value={uf}
              onChangeText={(text) => setUf(text)}
              placeholder="Estado"
              style={{ marginVertical: 10 }}
            />
            <TextInput
              value={city}
              onChangeText={(text) => setCity(text)}
              placeholder="Cidade"
              style={{ marginVertical: 10 }}
            />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Telefone"
              style={{ marginVertical: 10 }}
              autoCapitalize="none"
            />
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
            <TextInput
              value={passwordConfirmatio}
              onChangeText={(text) => setPasswordConfirmation(text)}
              placeholder="Confirmação de Senha"
              style={{ marginVertical: 10 }}
              autoCapitalize="none"
              secureTextEntry
            />
            <TouchableHighlight
              style={{ marginBottom: 17, borderRadius: 50 }}
              onPress={takeImage}
              activeOpacity={0.9}
              underlayColor="rgba(255, 255, 255, 0.2)"
            >
              <Text>Carregar foto</Text>
            </TouchableHighlight>
            {img && <Image source={{ uri: img }} style={{ width: 100, height: 100 }} />}
            <Button title="Registra" onPress={registerForm} />
            {loading && <Text>Carregando...</Text>}
          </View>
        </Container>
      </ScrollView>
    </LayoutDrawer>
  );
};

export default Register;
