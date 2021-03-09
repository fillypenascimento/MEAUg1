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
    color: colors.lightBlueStatus
    
  },

  line: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.greyLine,
    alignItems: 'center',
  },


  buttonStylePicture:{
    flex: 1,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.greyPlaceHolder,
    width:128,
    height:128,
    marginTop:32,
    marginBottom:32,
    elevation: 4
  },

  buttonStyleRegister:{
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor: colors.lightBlueStatus,
    width: 256,
    height:48,
    marginBottom:32,
    marginTop:32,
    elevation: 8,
    shadowColor:'black',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity:0.5,
    shadowRadius:2,
  },
  buttonStyleRegisterText:{
    padding: 15,
    alignItems:'center',
    fontFamily: 'Roboto-Regular',
    color: colors.greyFont,
  },  


});
