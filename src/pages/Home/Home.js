import React from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import AdoptionList from '../../components/AdoptionList/AdoptionList';
import Notifications from '../Notifications/Notifications';

const Home = (props) => {
  const { navigation } = props;

  return (
    <LayoutDrawer navigation={navigation} name="Home">
      <Container>
        {/* <Text style={styles.text}>Mostrar nossos animais nessa tela</Text> */}
        {/* <Text style={styles.text}>Adicionar botão de notificação nessa tela</Text> */}
        {/* <Text style={styles.text}>Beijar o guileb</Text> */}
        <AdoptionList noFilter navigation={navigation} allPets={false} />
      </Container>
      {/* <Notifications /> */}
    </LayoutDrawer>
  );
};

export default Home;
