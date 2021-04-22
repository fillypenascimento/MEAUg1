import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
// import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

const PetCard = (props) => {
  // const { navigation } = props;
  const { pet, allPets } = props;

  return (
    <Container>
      <View>
        <Text>{ pet.name }</Text>
        <Image source={{ uri: pet.photoURL }} style={{ width: 100, height: 100 }} />
        { allPets && (
          <>
            <View>
              <Text>{ pet.gender }</Text>
              <Text>{ pet.age }</Text>
              <Text>{ pet.size }</Text>
              <Text>BRASÍLIA - DISTRITO FEDERAL</Text>
            </View>
          </>
        )}
      </View>
    </Container>
  );
};

export default PetCard;
