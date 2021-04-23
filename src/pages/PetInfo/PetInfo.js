import React, { useState, useEffect } from 'react';
import { Text, Image, Button, ScrollView } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import LayoutStack from '../../components/LayoutStack/LayoutStack'
import Container from '../../components/Container/Container';
import getCurrentUserOn from '../../API/getCurrentUserOn';
import apiRegisterNotification from '../../API/apiRegisterNotification';

const PetInfo = (props) => {
  console.log(props);
  const { route, navigation } = props;
  console.log("ROTA", route);
  const { pet, petId } = route.params;
  console.log("OLHA O PET AQUI", pet);

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = getCurrentUserOn(setUser);

  //   return unsubscribe;
  // }, []);

  const adoptPet = () => {
    apiRegisterNotification(pet, petId, () => {
      navigation.navigate('Home');
    })
  };

  return (
    <LayoutStack navigation={navigation} name="Informações do Pet">
      <ScrollView>
        <Container>
          <Image source={{ uri: pet.data.photoURL }} style={{ width: 100, height: 100 }} />
          <Text>{ pet.data.name }</Text>
          <Text>SEXO</Text>
          <Text>{ pet.data.gender }</Text>
          <Text>PORTE</Text>
          <Text>{ pet.data.size }</Text>
          <Text>IDADE</Text>
          <Text>{ pet.data.age }</Text>
          <Text>LOCALIZAÇÃO</Text>
          <Text>Brasília - Distrito Federal</Text>
          <Text>CASTRADO</Text>
          <Text>{ pet.data.health.spayed ? "Sim" : "Não"}</Text>
          <Text>VERMIFIGADO</Text>
          <Text>{ pet.data.health.dewormed ? "Sim" : "Não" }</Text>
          <Text>VACINADO</Text>
          <Text>{ pet.data.health.vaccinated ? "Sim" : "Não" }</Text>
          <Text>DOENÇAS</Text>
          <Text>{ pet.data.health.sick ? "Sim" : "Nenhuma" }</Text>
          <Text>TEMPERAMENTO</Text>
          <Text>
            {
              `${pet.data.temper.calm ? "Calmo, " : ""
              }${pet.data.temper.guard ? "Guarda, " : ""
              }${pet.data.temper.joker ? "Brincalhão, " : ""
              }${pet.data.temper.lazy ? "Preguiçoso, " : ""
              }${pet.data.temper.lovely ? "Amoroso, " : ""
              }${pet.data.temper.shy ? "Envergonhado, " : ""}.`
            }
          </Text>
          <Text>EXIGÊNCIAS DO DOADOR</Text>
          <Text>
            {
              `${pet.data.adoptionDocs.adoptionTerms ? "Termo de adoção, " : ""
              }${pet.data.adoptionDocs.followUp.value ? `Acompanhamento durante ${pet.data.adoptionDocs.followUp.duration} meses, ` : ""
              }${pet.data.adoptionDocs.housePics ? "Fotos da casa, " : ""
              }${pet.data.adoptionDocs.previousVisit ? "Visita prévia, " : ""
              }${pet.data.adoptionDocs.visits ? "Visitas, " : ""}.`
            }
          </Text>
          <Text>MAIS SOBRE { pet.data.name.toUpperCase() }</Text>
          <Text>{ pet.data.about }</Text>
          <Button title="Pretendo Adotar" onPress={adoptPet} />
        </Container>
      </ScrollView>
    </LayoutStack>
  );
};

export default PetInfo;
