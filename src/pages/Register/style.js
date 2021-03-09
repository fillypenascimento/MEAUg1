import { StyleSheet } from 'react-native';
import colors from '../../BaseStyle/colors'

export default StyleSheet.create({
  text: {
    fontSize: 24,
  },

  textAlert:{
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.greyText,
    textAlign: 'center',
  },


  boxAlert:{
    marginTop: 16,
    backgroundColor: colors.lightBlueBox,
    borderRadius: 3,
  },

  textTitle:{
    marginTop: 28,
    marginBottom: 32,
    color: colors.lightBlueTop
    
  },



});
