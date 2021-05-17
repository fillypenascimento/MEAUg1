import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, ScrollView, Text, View } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import PetCard from '../PetCard/PetCard';
import { getAllPets, getMyPets } from '../../API/apiPets';

const AdoptionList = (props) => {
  const { navigation, allPets, noFilter } = props;
  console.log(allPets);

  const [pets, setPets] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(allPets) {
      getAllPets(setLoading, setPets);
    } else {
      getMyPets(setLoading, setPets);
    }
  }, [setPets]);

  const petsList = pets ? Object.keys(pets).map((petId) => {
    return ({
      petId: petId,
      petInfo: pets[petId]
    });
  }) : [];

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={noFilter ? petsList : petsList.filter(pet => pet.petInfo.registerType === "adoption")}
          keyExtractor={pet => pet.petId}
          renderItem={({ item: pet }) => (
            <PetCard navigation={navigation} pet={pet.petInfo} allPets={allPets} petId={pet.petId} />
          )}
        />
      </SafeAreaView>
      {loading && <Text style={{marginBottom: 20, alignSelf: 'center', }}>Carregando...</Text>}
    </>
  );
};

export default AdoptionList;
