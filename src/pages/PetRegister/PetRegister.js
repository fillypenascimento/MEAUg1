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

const PetRegister = (props) => {
  const { navigation } = props;

  const [petName, setPetName] = useState('');
  const [petImg, setPetImg] = useState(null);
  const [petType, setPetType] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSize, setPetSize] = useState('');
  const [petAge, setPetAge] = useState('');

  const [petTemperJoker, setPetTemperJoker] = useState(false);
  const [petTemperShy, setPetTemperShy] = useState(false);
  const [petTemperCalm, setPetTemperCalm] = useState(false);
  const [petTemperGuard, setPetTemperGuard] = useState(false);
  const [petTemperLovely, setPetTemperLovely] = useState(false);
  const [petTemperLazy, setPetTemperLazy] = useState(false);

  const [petHealthVaccinated, setPetHealthVaccinated] = useState(false);
  const [petHealthDewormed, setPetHealthDewormed] = useState(false);
  const [petHealthSpayed, setPetHealthSpayed] = useState(false);
  const [petHealthSick, setPetHealthSick] = useState(false);

  const [petDocsAdoptionTerms, setPetDocsAdoptionTerms] = useState(false);
  const [petDocsHousePics, setPetDocsHousePics] = useState(false);
  const [petDocsPreviousVisit, setPetDocsPreviousVisit] = useState(false);
  const [petDocsVisits, setPetDocsVisits] = useState(false);
  const [petDocsFollowUp, setPetDocsFollowUp] = useState(false);
  const [petDocsFollowUp1, setPetDocsFollowUp1] = useState(false);
  const [petDocsFollowUp3, setPetDocsFollowUp3] = useState(false);
  const [petDocsFollowUp6, setPetDocsFollowUp6] = useState(false);

  const [petDocsFinancialHelp, setPetDocsFinancialHelp] = useState(false);
  const [petDocsFinancialHelpFood, setPetDocsFinancialHelpFood] = useState(false);
  const [petDocsFinancialHelpMeds, setPetDocsFinancialHelpMeds] = useState(false);
  const [petDocsFinancialHelpObjects, setPetDocsFinancialHelpObjects] = useState(false);  
    

  const [petNecessitiesFood, setPetNecessitiesFood] = useState(false);
  const [petNecessitiesFinancialHelp, setPetNecessitiesFinancialHelp] = useState(false);
  const [petNecessitiesMeds, setPetNecessitiesMeds] = useState(false);
  const [petNecessitiesMedications, setPetNecessitiesMedications] = useState('');
  const [petNecessitiesObject, setPetNecessitiesObject] = useState(false);
  const [petNecessitiesObjects, setPetNecessitiesObjects] = useState('');

  const [petAbout, setPetAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const [adocao, setAdocao] = useState(true);
  const [apadrinhamento, setApadrinhamento] = useState(false);
  const [ajudar, setAjudar] = useState(false);

  const registerForm = () => {
    if (loading) {
      return false;
    }

    if (petName.trim().includes(' ')) {
      Alert.alert('O username não pode ter espaço');
      return false;
    }

    if (petName.trim().length < 4) {
      Alert.alert('O username não pode ser  menor que 4');
      return false;
    }

    if (!petImg) {
      Alert.alert('Carregue uma imagem');
      return false;
    }

    return true;
  };

  const trueAdocao = () => {
       setAdocao(true);
       setApadrinhamento(false);
       setAjudar(false);
 }
  const trueApadrinhamento = () => {
  setAdocao(false);
  setApadrinhamento(true);
  setAjudar(false);
}
   const trueAjudar = () => {
       setAdocao(false);
       setApadrinhamento(false);
       setAjudar(true);
 }
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
            onPress={trueAdocao}/>
            <Button
            title="Apadrinhar"
            onPress={trueApadrinhamento}/>
            <Button
            title="Ajuda"
            onPress={trueAjudar}/>
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
                status={ petType === 'Cachorro' ? 'checked' : 'unchecked' }
                onPress={() => setPetType('Cachorro')}
              />
              <Text>Cachorro</Text>
              <RadioButton
                value="Gato"
                status={ petType === 'Gato' ? 'checked' : 'unchecked' }
                onPress={() => setPetType('Gato')}
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
                value={petTemperJoker}
                onValueChange={setPetTemperJoker}
              />
              <Text>Brincalhão</Text>
              <CheckBox
                value={petTemperShy}
                onValueChange={setPetTemperShy}
              />
              <Text>Tímido</Text>
              <CheckBox
                value={petTemperCalm}
                onValueChange={setPetTemperCalm}
              />
              <Text>Calmo</Text>
              <CheckBox
                value={petTemperGuard}
                onValueChange={setPetTemperGuard}
              />
              <Text>Guarda</Text>
              <CheckBox
                value={petTemperLovely}
                onValueChange={setPetTemperLovely}
              />
              <Text>Amoroso</Text>
              <CheckBox
                value={petTemperLazy}
                onValueChange={setPetTemperLazy}
              />
              <Text>Preguiçoso</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>SAÚDE</Text>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

              <CheckBox
                value={petHealthVaccinated}
                onValueChange={setPetHealthVaccinated}
              />
              <Text>Vacinado</Text>
              <CheckBox
                value={petHealthDewormed}
                onValueChange={setPetHealthDewormed}
              />
              <Text>Vermifugado</Text>
              <CheckBox
                value={petHealthSpayed}
                onValueChange={setPetHealthSpayed}
              />
              <Text>Castrado</Text>
              <CheckBox
                value={petHealthSick}
                onValueChange={setPetHealthSick}
              />
              <Text>Doente</Text>
              </View>

            </View>
            {adocao &&
            <View>
              <Text style={styles.textTitle}>EXIGÊNCIAS PARA ADOÇÃO</Text>
              <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

              <Text>Termos de Adoção</Text>
              <CheckBox
                value={petDocsAdoptionTerms}
                onValueChange={setPetDocsAdoptionTerms}
              />
              <Text>Fotos da casa</Text>
              <CheckBox
                value={petDocsHousePics}
                onValueChange={setPetDocsHousePics}
              />
              <Text>Visita prévia ao animal</Text>
              <CheckBox
                value={petDocsPreviousVisit}
                onValueChange={setPetDocsPreviousVisit}
              />
              <Text>Acompanhamento pós adoção</Text>
              <CheckBox
                value={petDocsFollowUp}
                onValueChange={setPetDocsFollowUp}
              />
              <Text>1 Mês</Text>
              <CheckBox
                value={petDocsFollowUp1}
                onValueChange={setPetDocsFollowUp1}
              />
              <Text>3 Meses</Text>
              <CheckBox
                value={petDocsFollowUp3}
                onValueChange={setPetDocsFollowUp3}
              />
              <Text>6 Meses</Text>
              <CheckBox
                value={petDocsFollowUp6}
                onValueChange={setPetDocsFollowUp6}
              />
              
              </View>
            </View>
}

{apadrinhamento &&
            <View>
            <Text style={styles.textTitle}>EXIGÊNCIAS PARA APADRINHAMENTO</Text>
            <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

            <Text>Termos de Adoção</Text>
            <CheckBox
              value={petDocsAdoptionTerms}
              onValueChange={setPetDocsAdoptionTerms}
            />
            <Text>Auxílio Financeiro</Text>
            <CheckBox
              value={petDocsFinancialHelp}
              onValueChange={setPetDocsFinancialHelp}
            />
            <Text>Alimentação</Text>
            <CheckBox
              value={petDocsFinancialHelpFood}
              onValueChange={setPetDocsFinancialHelpFood}
            />
            <Text>Saúde</Text>
            <CheckBox
              value={petDocsFinancialHelpMeds}
              onValueChange={setPetDocsFinancialHelpMeds}
            />
            <Text>Objetos</Text>
            <CheckBox
              value={petDocsFinancialHelpObjects}
              onValueChange={setPetDocsFinancialHelpObjects}
            />
            <Text>Visitas ao animal</Text>
            <CheckBox
              value={petDocsVisits}
              onValueChange={setPetDocsVisits}
            />
            </View>
          </View>
}


{ajudar &&
  <View>
            <Text style={styles.textTitle}>NECESSIDADES DO ANIMAL</Text>
            <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems:'flex-start', justifyContent: 'flex-start',}}>

            <Text>Alimento</Text>
            <CheckBox
              value={petNecessitiesFood}
              onValueChange={setPetNecessitiesFood}
            />
            <Text>Auxílio Financeiro</Text>
            <CheckBox
              value={petNecessitiesFinancialHelp}
              onValueChange={setPetNecessitiesFinancialHelp}
            />
            <Text>Medicamento</Text>
            <CheckBox
              value={petNecessitiesMeds}
              onValueChange={setPetNecessitiesMeds}
            />
              <TextInput
              value={petNecessitiesMedications}
              onChangeText={(text) => setPetNecessitiesMedications(text)}
              placeholder="Nomes dos Medicamentos"
              style={{ marginVertical: 10 }}
              autoCapitalize="words"
            />
            <Text>Objetos</Text>
            <CheckBox
              value={petNecessitiesObject}
              onValueChange={setPetNecessitiesObject}
            />
              <TextInput
              value={petNecessitiesObjects}
              onChangeText={(text) => setPetNecessitiesObjects(text)}
              placeholder="Sobre o animal"
              style={{ marginVertical: 10 }}
              autoCapitalize="words"
            />
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
