import { StyleSheet } from 'react-native';

const LIGHT_GREY = "#E6E7E8";
const MEDIUM_GREY = "#BDBDBD";
const DARK_GREY = "#575756";
const SOFT_GREEN = "#88C9BF"

export default StyleSheet.create({
  text: {
    fontSize: 24,
  },
  input1: {
    fontSize: 14,
    color: (DARK_GREY),
    paddingBottom: 8,
    marginTop: 64,
    marginBottom: 20,
  },
  input2: {
    fontSize: 14,
    color: (DARK_GREY),
    paddingBottom: 8,
    marginTop: 0,
    marginBottom: 52,
  },
  placeholderTextColor: {
    color: (MEDIUM_GREY),
  },
  selectionColor: {
    color: (SOFT_GREEN),
  },
  underlineColor: {
    color: (LIGHT_GREY),
  },
  underlineColorFocused: {
    color: (SOFT_GREEN),
  },
  button: {
    fontSize: 12,
    color: ('#434343'),
    backgroundColor: (SOFT_GREEN),
    borderRadius: 2,
  }
});
