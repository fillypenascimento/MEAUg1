import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, ScrollView, Text, View } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import PetCard from '../PetCard/PetCard';
import { getAllPets, getMyPets } from '../../API/apiPets';

const AdoptionList = (props) => {
  const { allPets } = props;
  console.log(allPets);

  const [pets, setPets] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("TO AQUI NESSA JOÇA");


  // const petsResponse = allPets ? getAllPets(setLoading, setPets) : getMyPets(setLoading, setPets);

  // isso aqui tá causando os re-renders; a ideia era atribuir pro "pets" o resultado da chamada pra API pra recuperar os animais
  if(allPets) getAllPets(setLoading, setPets); else getMyPets(setLoading, setPets);

  const petsListIds = pets ? Object.keys(pets) : [];
  console.log(petsListIds);

  const petsListValues = pets ? Object.values(pets): [];
  console.log(petsListValues);
  console.log("TO AQUI NESSA PORRAAAAAAAAAA");

  const petsListIdsValues = petsListValues.map((value,i) => {
    // console.log(value.petId);

    return ({
      petId: petsListIds[i],
      petInfo: value,
    })
  });
  
  console.log(petsListIdsValues);

  // const petsList = petsListIdsValues.map(pet => {
  //   <PetCard key={pet.petId} pet={petInfo} allPets={allPets}/>
  // });

  return (
    <Container>
      {/* <ScrollView>
        <View>
          {petsList}
        </View>
      </ScrollView> */}
      <SafeAreaView>
        <FlatList
          data={petsListIdsValues}
          keyExtractor={pet => pet.petId}
          renderItem={({ item: pet }) => (
            // <Text style={styles.project}>{ project.title }</Text>
            <PetCard pet={pet.petInfo} allPets={allPets}/>
          )}
        />
      </SafeAreaView>
      {loading && <Text style={{marginBottom: 20, alignSelf: 'center', }}>Carregando...</Text>}
    </Container>
  );
};

export default AdoptionList;
