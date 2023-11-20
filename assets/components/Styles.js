import { StyleSheet } from 'react-native';
const COLORS = {primary: '#282534', white: '#fff'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    fontFamily:'Work Sans'

  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontFamily:'Work Sans'
  },

  indicator: {
    height: 5,
    width: 10,
    backgroundColor: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  // Styles for the Error Modal
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  link: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    fontFamily:'Work Sans'
  },

});

export default styles;