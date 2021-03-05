import React, { useState, useEffect } from 'react';
import { Text, Image, Button } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import getCurrentUserOn from '../../API/getCurrentUserOn';

const Profile = (props) => {
  const { navigation } = props;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getCurrentUserOn(setUser);

    return unsubscribe;
  }, []);

  return (
    <LayoutDrawer navigation={navigation} name="Meu Perfil">
      <Container>
        <Text style={styles.text}>Profile</Text>
        {user && (
          <>
            <Image source={{ uri: user.photoURL }} style={{ width: 100, height: 100 }} />
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
            <Text>{user.email}</Text>
            <Text>
              {user.city} - {user.uf}
            </Text>
            <Text>{user.phone}</Text>
            <Text>{user.username}</Text>
          </>
        )}
        <Button title="Editar Perfil" onPress={() => navigation.navigate('EditProfile')} />
      </Container>
    </LayoutDrawer>
  );
};

export default Profile;
