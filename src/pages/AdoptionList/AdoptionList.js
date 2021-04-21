import React from 'react';
import { Text } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

const AdoptionList = (props) => {
  const { navigation } = props;

  return (
    <LayoutDrawer navigation={navigation} name="Lista de Adoção">
      <Container>
      <Text style={styles.text}>Lista de animais XD</Text>
      </Container>
    </LayoutDrawer>
  );
};

export default AdoptionList;
