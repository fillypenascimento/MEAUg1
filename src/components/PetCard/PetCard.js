import React from 'react';
import { Text, View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import styles from './style';
// import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const PetCard = (props) => {
  const { pet, petId, allPets, navigation } = props;

  return (
    <Container>
      <View>
        <Card
          onPress={() => { navigation.navigate('PetInfo', { pet: pet, petId: petId }) }}
        >
          {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
          <Card.Title title={ pet.data.name }/>
          <Card.Cover source={{ uri: pet.data.photoURL }} />
          { allPets && (
            <Card.Content>
              {/* <Title>Card title</Title> */}
              <Paragraph>{ pet.data.gender }</Paragraph>
              <Paragraph>{ pet.data.age }</Paragraph>
              <Paragraph>{ pet.data.size }</Paragraph>
              <Paragraph>BRASÍLIA - DISTRITO FEDERAL</Paragraph>
            </Card.Content>
          )}
        </Card>
      </View>
    </Container>
  );
};

export default PetCard;
