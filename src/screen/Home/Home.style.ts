import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  ninja: {
    width: 20,
  },
  top: {
    flex: 9,
    padding: 15,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
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
