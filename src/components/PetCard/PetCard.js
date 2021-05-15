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
      {/* <View> */}
        <Card
          onPress={() => { navigation.navigate('PetInfo', { pet: pet, petId: petId }) }}
          style={styles.cardContainer}
        >
          {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
          <Card.Title title={ pet.data.name } titleStyle={styles.cardTitleStyle} style={styles.cardTitle}/>
          <Card.Cover source={{ uri: pet.data.photoURL }} style={styles.cardCover}/>
          { allPets && (
            <Card.Content style={styles.cardContent}>
              {/* <Title>Card title</Title> */}
              <View style={styles.cardContentInfo}>
                <Paragraph style={styles.textInfoParagraph}>{ pet.data.gender }</Paragraph>
                <Paragraph style={styles.textInfoParagraph}>{ pet.data.age }</Paragraph>
                <Paragraph style={styles.textInfoParagraph}>{ pet.data.size }</Paragraph>
              </View>
              <Paragraph style={styles.textInfoParagraph}>BRASÍLIA - DISTRITO FEDERAL</Paragraph>
            </Card.Content>
          )}
        </Card>
      {/* </View> */}
    </Container>
  );
};

export default PetCard;
