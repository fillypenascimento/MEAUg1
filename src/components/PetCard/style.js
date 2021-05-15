import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginHorizontal: 8,
    borderRadius: 5,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowOpacity: 5,
    shadowRadius: 0.2,
    elevation: 3,
  },
  cardTitle: {
    backgroundColor: '#fee29b',
    // height: 32,
  },
  cardTitleStyle: {
    fontSize: 16,
    color: '#434343',
    fontFamily: 'Roboto-Medium',
    height: 32
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
