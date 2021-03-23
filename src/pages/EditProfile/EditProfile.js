import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './style';
import LayoutStack from '../../components/LayoutStack/LayoutStack';
import Container from '../../components/Container/Container';
import apiEditProfile from '../../API/apiEditProfile';

import getCurrentUserOnce from '../../API/getCurrentUserOnce';

const EditProfile = (props) => {
  const { navigation } = props;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUserOnce((user) => {
      setName(user.name);
      setAge(user.age);
      setUf(user.uf);
      setCity(user.city);
      setPhone(user.phone);
      setPhotoURL(user.photoURL);
    });
  }, []);

  const save = () => {
    if (loading) {
      return false;
    }

    const userDate = {
      name,
      age,
      uf,
      phone,
      city,
    };

    apiEditProfile(userDate, img, setLoading, navigation);

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
    <LayoutStack navigation={navigation} name="Editar Perfil">
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
            <TouchableHighlight
              style={{ marginBottom: 17, borderRadius: 50 }}
              onPress={takeImage}
              activeOpacity={0.9}
              underlayColor="rgba(255, 255, 255, 0.2)"
            >
              <Text>Carregar foto</Text>
            </TouchableHighlight>
            {photoURL && !img && (
              <Image source={{ uri: photoURL }} style={{ width: 100, height: 100 }} />
            )}
            {img && <Image source={{ uri: img }} style={{ width: 100, height: 100 }} />}
            <Button title="Salvar" onPress={save} />
            {loading && <Text>Carregando...</Text>}
          </View>
        </Container>
      </ScrollView>
    </LayoutStack>
  );
};

export default EditProfile;
