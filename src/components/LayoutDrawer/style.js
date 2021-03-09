import { StyleSheet } from 'react-native';
import colors from '../../BaseStyle/colors'


export default StyleSheet.create({
  text: {
    padding: 16,
    marginVertical: 5,
    fontFamily: 'Roboto-Medium',
    color: colors.greyText,

  },
  routeName: {
    fontSize: 20,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    
  },
  line: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.greyLine,
    alignItems: 'center',
  },
});
