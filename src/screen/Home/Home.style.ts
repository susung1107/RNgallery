import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 9,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  button: {
    width: 100,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#ff6666',
    alignItems: 'center',
  },
  buttonText: {
    lineHeight: 45,
    color: '#fff',
  },
});
