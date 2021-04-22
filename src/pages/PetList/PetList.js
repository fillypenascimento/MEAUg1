import React, { useState, useEffect } from 'react';
import { Text, Image, Button } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import getCurrentUserOn from '../../API/getCurrentUserOn';
import AdoptionList from '../../components/AdoptionList/AdoptionList';

const PetList = (props) => {
  const { navigation } = props;

  return (
    <LayoutDrawer navigation={navigation} name="Animais Para Adoção">
      <Container>
        <AdoptionList navigation={navigation} allPets={true} />
      </Container>
    </LayoutDrawer>
  );
};

export default PetList;
