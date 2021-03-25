import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Button,
  CheckBox,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';


import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';
import apiRegisterPet from '../../API/apiRegisterPet';

const PetRegister = (props) => {
  const { navigation } = props;

  // TIPO DE CADASTRO: ADOÇÃO, APADRINHAMENTO OU AJUDA
  const [registerType, setRegisterType] = useState('adoption');

  const [petName, setPetName] = useState('');
  const [petImg, setPetImg] = useState(null);
  const [petSpecies, setPetSpecies] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSize, setPetSize] = useState('');
  const [petAge, setPetAge] = useState('');

  const [petTemper, setPetTemper] = useState({
    "calm": false,
    "guard": false,
    "joker": false,
    "lazy": false,
    "lovely": false,
    "shy": false,
  });

  const [petHealth, setPetHealth] = useState({
    "dewormed": false,
    "sick": false,
    "spayed": false,
    "vaccinated": false,
  });

  // EXIGÊNCIAS ADOÇÃO
  const [petAdoptionDocs, setPetAdoptionDocs] = useState({
    "adoptionTerms": false,
    "housePics": false,
    "previousVisit": false,
    "visits": false,
    "followUp": {
      "value": false,
      "duration": 0,
    },
  });

  // EXIGÊNCIAS APADRINHAMENTO
  const [petSponsorshipDocs, setPetSponsorshipDocs] = useState({
    "sponsorshipTerms": false,
    "financialAid": {
      "value": false,
      "types": {
        "food": false,
        "health": false,
        "objects": false,
      }
    },
    "visits": false,
  });
    
  // NECESSIDADES DO ANIMAL
  const [petAidDocs, setPetAidDocs] = useState({
    "food": false,
    "financialAid": false,
    "medications": {
      "value": false,
      "description": "",
    },
    "objects": {
      "value": false,
      "description": ""
    }
  });

  const [petAbout, setPetAbout] = useState('');
  const [loading, setLoading] = useState(false);


  const registerForm = () => {
    if (loading) {
      return false;
    }

    if (petName.trim().length < 1) {
      Alert.alert('O nome do pet não pode ser vazio.');
      return false;
    }

    if (!petImg) {
      Alert.alert('Carregue uma imagem para o seu pet.');
      return false;
    }

    if (petSpecies === '') {
      Alert.alert('Selecione a espécie do seu pet.');
      return false;
    }

    if (petGender === '') {
      Alert.alert('Selecione o sexo do seu pet.');
      return false;
    }

    if (petSize === '') {
      Alert.alert('Selecione o tamanho do seu pet.');
      return false;
    }

    if (petAge === '') {
      Alert.alert('Selecione a idade do seu pet.');
      return false;
    }

    const petData = {
      registerType,
      petName,
      petSpecies,
      petGender,
      petSize,
      petAge,
      petTemper,
      petHealth,
      petDocs: () => {
        switch (registerType) {
          case "adoption":
            return petAdoptionDocs;
          case "sponsorship":
            return petSponsorshipDocs;
          case "aid":
            return petAidDocs;
          default:
            break;
        }
      },
      petAbout,
    };

    apiRegisterPet(petData, petImg, setLoading);

    return true;
  };

  const temperCheckboxHandler = (key, value) => {
    setPetTemper({...petTemper, [key]: value});
    // console.log(petTemper);
  };

  const healthCheckboxHandler = (key, value) => {
    setPetHealth({...petHealth, [key]: value});
    // console.log(petHealth);
  };

  const adoptionDocsCheckboxHandler = (key, value) => {
    setPetAdoptionDocs({...petAdoptionDocs, [key]: value});
    console.log(petAdoptionDocs);
  };

  const sponsorshipDocsCheckboxHandler = (key, value) => {
    setPetSponsorshipDocs({...petSponsorshipDocs, [key]: value});
    console.log(petSponsorshipDocs);
  };

  const aidDocsCheckboxHandler = (key, value) => {
    setPetAidDocs({...petAidDocs, [key]: value});
    console.log(petAidDocs);
  };

  const takeImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      useFrontCamera: true,
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImg(image.path);
    });
  };

  return (
    <LayoutDrawer navigation={navigation} name="Cadastro do Animal">
      <ScrollView>
        <Container>
          
          <View>
            <Text style={{paddingBottom: 25, paddingTop: 25, textAlign: 'center'}}>
            Tenho interesse em cadastrar o animal para:  
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button
                title="Adoção"
                onPress={() => {setRegisterType("adoption")}}
              />
              <Button
                title="Apadrinhar"
                onPress={() => {setRegisterType("sponsorship")}}
              />
              <Button
                title="Ajuda"
                onPress={() => {setRegisterType("aid")}}
              />
            </View>
          </View>

         
          <View style={styles.line}></View>
        </Container>
         
        <Container>
          <View>
              <Text style={{paddingTop: 25}}>Adoção</Text>
              <Text style={styles.textTitle}>Nome do animal</Text>
              <TextInput
                value={petName}
                onChangeText={(text) => setPetName(text)}
                placeholder="Nome do animal"
                style={{ marginVertical: 10 }}
                autoCapitalize="words"
              />
            </View>
           
            <View>
              <Text style={styles.textTitle}>FOTO DO ANIMAL</Text>
            </View>

            <View style={styles.buttonStylePicture}>
              <TouchableOpacity
                style={{ marginBottom: 17, borderRadius: 50 }}
                onPress={takeImage}
                activeOpacity={0.9}
                underlayColor="rgba(255, 255, 255, 0.2)"
                hitSlop={{top: 64, bottom: 64, left: 64, right: 64}}
              >
                {petImg ? <Image source={{ uri: petImg }} style={{ width: 128, height: 138 }} /> : <Image source={require('../../components/Icons/camera.png')} style={{width: 48, height: 48, alignSelf: 'center', marginTop: 20}}/>}
              </TouchableOpacity>
            </View>


            <View>
              <Text style={styles.textTitle}>ESPÉCIE</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <RadioButton
                value="Cachorro"
                status={ petSpecies === 'Cachorro' ? 'checked' : 'unchecked' }
                onPress={() => setPetSpecies('Cachorro')}
              />
              <Text>Cachorro</Text>
              <RadioButton
                value="Gato"
                status={ petSpecies === 'Gato' ? 'checked' : 'unchecked' }
                onPress={() => setPetSpecies('Gato')}
              />
              <Text>Gato</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>SEXO</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RadioButton
                  value="Macho"
                  status={ petGender === 'Macho' ? 'checked' : 'unchecked' }
                  onPress={() => setPetGender('Macho')}
                />
                <Text>Macho</Text>
                <RadioButton
                  value="Fêmea"
                  status={ petGender === 'Fêmea' ? 'checked' : 'unchecked' }
                  onPress={() => setPetGender('Fêmea')}
                />
                <Text>Fêmea</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>PORTE</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RadioButton
                  value="Pequeno"
                  status={ petSize === 'Pequeno' ? 'checked' : 'unchecked' }
                  onPress={() => setPetSize('Pequeno')}
                />
                <Text>Pequeno</Text>
                <RadioButton
                  value="Médio"
                  status={ petSize === 'Médio' ? 'checked' : 'unchecked' }
                  onPress={() => setPetSize('Médio')}
                />
                <Text>Médio</Text>
                <RadioButton
                  value="Grande"
                  status={ petSize === 'Grande' ? 'checked' : 'unchecked' }
                  onPress={() => setPetSize('Grande')}
                />
                <Text>Grande</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>IDADE</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RadioButton
                  value="Macho"
                  status={ petGender === 'Macho' ? 'checked' : 'unchecked' }
                  onPress={() => setPetGender('Macho')}
                />
                <Text>Macho</Text>
                <RadioButton
                  value="Fêmea"
                  status={ petGender === 'Fêmea' ? 'checked' : 'unchecked' }
                  onPress={() => setPetGender('Fêmea')}
                />
                <Text>Fêmea</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>PORTE</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RadioButton
                  value="Filhote"
                  status={ petAge === 'Filhote' ? 'checked' : 'unchecked' }
                  onPress={() => setPetAge('Filhote')}
                />
                <Text>Filhote</Text>
                <RadioButton
                  value="Adulto"
                  status={ petAge === 'Adulto' ? 'checked' : 'unchecked' }
                  onPress={() => setPetAge('Adulto')}
                />
                <Text>Adulto</Text>
                <RadioButton
                  value="Idoso"
                  status={ petAge === 'Idoso' ? 'checked' : 'unchecked' }
                  onPress={() => setPetAge('Idoso')}
                />
                <Text>Idoso</Text>
              </View>
            </View>
            
            <View>
              <Text style={styles.textTitle}>TEMPERAMENTO</Text>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', justifyContent: 'center',}}>

                <CheckBox
                  value={petTemper.joker}
                  onValueChange={() => {temperCheckboxHandler("joker", !petTemper.joker)}}
                />
                <Text>Brincalhão</Text>
                <CheckBox
                  value={petTemper.shy}
                  onValueChange={() => {temperCheckboxHandler("shy", !petTemper.shy)}}
                />
                <Text>Tímido</Text>
                <CheckBox
                  value={petTemper.calm}
                  onValueChange={() => {temperCheckboxHandler("calm", !petTemper.calm)}}
                />
                <Text>Calmo</Text>
                <CheckBox
                  value={petTemper.guard}
                  onValueChange={() => {temperCheckboxHandler("guard", !petTemper.guard)}}
                />
                <Text>Guarda</Text>
                <CheckBox
                  value={petTemper.lovely}
                  onValueChange={() => {temperCheckboxHandler("lovely", !petTemper.lovely)}}
                />
                <Text>Amoroso</Text>
                <CheckBox
                  value={petTemper.lazy}
                  onValueChange={() => {temperCheckboxHandler("lazy", !petTemper.lazy)}}
                />
                <Text>Preguiçoso</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>SAÚDE</Text>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

                <CheckBox
                  value={petHealth.vaccinated}
                  onValueChange={() => {healthCheckboxHandler("vaccinated", !petHealth.vaccinated)}}
                />
                <Text>Vacinado</Text>
                <CheckBox
                  value={petHealth.dewormed}
                  onValueChange={() => {healthCheckboxHandler("dewormed", !petHealth.dewormed)}}
                />
                <Text>Vermifugado</Text>
                <CheckBox
                  value={petHealth.spayed}
                  onValueChange={() => {healthCheckboxHandler("spayed", !petHealth.spayed)}}
                />
                <Text>Castrado</Text>
                <CheckBox
                  value={petHealth.sick}
                  onValueChange={() => {healthCheckboxHandler("sick", !petHealth.sick)}}
                />
                <Text>Doente</Text>
              </View>

            </View>

            {(registerType==="adoption") &&
              <View>
                <Text style={styles.textTitle}>EXIGÊNCIAS PARA ADOÇÃO</Text>
                <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

                  <Text>Termos de Adoção</Text>
                  <CheckBox
                    value={petAdoptionDocs.adoptionTerms}
                    onValueChange={() => {adoptionDocsCheckboxHandler("adoptionTerms", !petAdoptionDocs.adoptionTerms)}}
                  />
                  <Text>Fotos da casa</Text>
                  <CheckBox
                    value={petAdoptionDocs.housePics}
                    onValueChange={() => {adoptionDocsCheckboxHandler("housePics", !petAdoptionDocs.housePics)}}
                  />
                  <Text>Visita prévia ao animal</Text>
                  <CheckBox
                    value={petAdoptionDocs.previousVisit}
                    onValueChange={() => {adoptionDocsCheckboxHandler("previousVisit", !petAdoptionDocs.previousVisit)}}
                  />
                  <Text>Acompanhamento pós adoção</Text>
                  <CheckBox
                    value={petAdoptionDocs.followUp.value}
                    onValueChange={() => {
                      adoptionDocsCheckboxHandler(
                        "followUp",
                        {
                          "value": !petAdoptionDocs.followUp.value,
                          "duration": petAdoptionDocs.followUp.value ? 0 : petAdoptionDocs.followUp.duration,
                        }
                      )
                    }}
                  />

                  {petAdoptionDocs.followUp.value &&
                    <View>
                      <Text>1 Mês</Text>
                      <RadioButton
                        value="1"
                        status={ petAdoptionDocs.followUp.duration === 1 ? 'checked' : 'unchecked' }
                        onPress={() => {adoptionDocsCheckboxHandler("followUp", { "value": petAdoptionDocs.followUp.value, "duration":1 })}}
                      />
                      <Text>3 Meses</Text>
                      <RadioButton
                        value="3"
                        status={ petAdoptionDocs.followUp.duration === 3 ? 'checked' : 'unchecked' }
                        onPress={() => {adoptionDocsCheckboxHandler("followUp", { "value": petAdoptionDocs.followUp.value, "duration":3 })}}
                      />
                      <Text>6 Meses</Text>
                      <RadioButton
                        value="6"
                        status={ petAdoptionDocs.followUp.duration === 6 ? 'checked' : 'unchecked' }
                        onPress={() => {adoptionDocsCheckboxHandler("followUp", { "value": petAdoptionDocs.followUp.value, "duration":6 })}}
                      />
                    </View>
                  } 
                </View>
              </View>
            }

            {(registerType==="sponsorship") &&
              <View>
                <Text style={styles.textTitle}>EXIGÊNCIAS PARA APADRINHAMENTO</Text>
                <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

                  <Text>Termos de Apadrinhamento</Text>
                  <CheckBox
                    value={petSponsorshipDocs.sponsorshipTerms}
                    onValueChange={() => {sponsorshipDocsCheckboxHandler("sponsorshipTerms", !petSponsorshipDocs.sponsorshipTerms)}}
                  />
                  <Text>Auxílio Financeiro</Text>
                  <CheckBox
                    value={petSponsorshipDocs.financialAid.value}
                    onValueChange={() => {
                      sponsorshipDocsCheckboxHandler(
                        "financialAid",
                        {
                          "value": !petSponsorshipDocs.financialAid.value,
                          "types": petSponsorshipDocs.financialAid.value ?
                            {
                              "food": false,
                              "health": false,
                              "objects": false,
                            } : 
                            petSponsorshipDocs.financialAid.types
                        },
                      )
                    }}
                  />
                  {petSponsorshipDocs.financialAid.value &&
                    <View>
                      <Text>Alimentação</Text>
                      <CheckBox
                        value={petSponsorshipDocs.financialAid.types.food}
                        onValueChange={() => {sponsorshipDocsCheckboxHandler(
                          "financialAid",
                          {
                            "value": petSponsorshipDocs.financialAid.value,
                            "types": {
                              "food": !petSponsorshipDocs.financialAid.types.food,
                              "health": petSponsorshipDocs.financialAid.types.health,
                              "objects": petSponsorshipDocs.financialAid.types.objects,
                            }
                          },
                        )}}
                      />
                      <Text>Saúde</Text>
                      <CheckBox
                        value={petSponsorshipDocs.financialAid.types.health}
                        onValueChange={() => {sponsorshipDocsCheckboxHandler(
                          "financialAid",
                          {
                            "value": petSponsorshipDocs.financialAid.value,
                            "types": {
                              "food": petSponsorshipDocs.financialAid.types.food,
                              "health": !petSponsorshipDocs.financialAid.types.health,
                              "objects": petSponsorshipDocs.financialAid.types.objects,
                            }
                          },
                        )}}
                      />
                      <Text>Objetos</Text>
                      <CheckBox
                        value={petSponsorshipDocs.financialAid.types.objects}
                        onValueChange={() => {sponsorshipDocsCheckboxHandler(
                          "financialAid",
                          {
                            "value": petSponsorshipDocs.financialAid.value,
                            "types": {
                              "food": petSponsorshipDocs.financialAid.types.food,
                              "health": petSponsorshipDocs.financialAid.types.health,
                              "objects": !petSponsorshipDocs.financialAid.types.objects,
                            }
                          },
                        )}}
                      />
                    </View>
                  }
                  <Text>Visitas ao animal</Text>
                  <CheckBox
                    value={petSponsorshipDocs.visits}
                    onValueChange={() => {sponsorshipDocsCheckboxHandler("visits", !petSponsorshipDocs.visits)}}
                  />
                </View>
              </View>
            }

            {(registerType==="aid") &&
              <View>
                <Text style={styles.textTitle}>NECESSIDADES DO ANIMAL</Text>
                <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

                  <Text>Alimento</Text>
                  <CheckBox
                    value={petAidDocs.food}
                    onValueChange={() => {aidDocsCheckboxHandler("food", !petAidDocs.food)}}
                  />
                  <Text>Auxílio Financeiro</Text>
                  <CheckBox
                    value={petAidDocs.financialAid}
                    onValueChange={() => {aidDocsCheckboxHandler("financialAid", !petAidDocs.financialAid)}}
                  />
                  <Text>Medicamento</Text>
                  <CheckBox
                    value={petAidDocs.medications.value}
                    onValueChange={() => {aidDocsCheckboxHandler(
                      "medications",
                      {
                        "value": !petAidDocs.medications.value,
                        "description": petAidDocs.medications.value ? "" : petAidDocs.medications.description
                      }
                    )}}
                  />
                  {petAidDocs.medications.value &&
                    <View>
                      <TextInput
                        value={petAidDocs.medications.description}
                        onChangeText={(text) => aidDocsCheckboxHandler(
                          "medications",
                          {
                            "value": petAidDocs.medications.value,
                            "description": text
                          }
                        )}
                        placeholder="Nomes dos medicamentos"
                        style={{ marginVertical: 10 }}
                        autoCapitalize="words"
                      />
                    </View>
                  }
                  <Text>Objetos</Text>
                  <CheckBox
                    value={petAidDocs.objects.value}
                    onValueChange={() => {aidDocsCheckboxHandler(
                      "objects",
                      {
                        "value": !petAidDocs.objects.value,
                        "description": petAidDocs.objects.value ? "" : petAidDocs.objects.description
                      }
                    )}}
                  />
                  {petAidDocs.objects.value &&
                    <View>
                      <TextInput
                        value={petAidDocs.objects.description}
                        onChangeText={(text) => aidDocsCheckboxHandler(
                          "objects",
                          {
                            "value": petAidDocs.objects.value,
                            "description": text
                          }
                        )}
                        placeholder="Especifique o(s) objeto(s)"
                        style={{ marginVertical: 10 }}
                        autoCapitalize="words"
                      />
                    </View>
                  }
                </View>
              </View>
            }

            <View>
              <Text style={styles.textTitle}>SOBRE O ANIMAL</Text>
              <TextInput
                value={petAbout}
                onChangeText={(text) => setPetAbout(text)}
                placeholder="Sobre o animal"
                style={{ marginVertical: 10 }}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.buttonStyleRegister}>
              <TouchableOpacity 
                style={{marginBottom: 128, borderRadius: 128}}
                onPress={registerForm}
                activeOpacity={0.9}
                underlayColor="rgba(255, 255, 255, 0.2)"
              >
                <Text style={styles.buttonStyleRegisterText}>COLOCAR PARA ADOÇÃO</Text>
              </TouchableOpacity>
            </View>
           
            {loading && <Text style={{marginBottom: 20, alignSelf: 'center', }}>Carregando...</Text>}

        </Container>

      </ScrollView>
    </LayoutDrawer>
  );
};

export default PetRegister;
