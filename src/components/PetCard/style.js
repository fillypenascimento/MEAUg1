import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginHorizontal: 8,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 4,
  },
  cardTitle: {
    backgroundColor: '#fee29b',
    color: '#434343',
    height: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
  cardTitleStyle: {
    // fontSize: 16,
    // color: '#434343',
    // fontFamily: 'Roboto-Medium',
    // height: 32
  },
  cardCover: {
    height: 183
  },
  cardContent: {
    textAlign: 'center',
    height: 49,
  },
  cardContentInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInfoParagraph: {
    fontSize: 12,
    color: '#434343',
    textAlign: 'center',
  }
});
