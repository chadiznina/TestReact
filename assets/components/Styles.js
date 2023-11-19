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
  circleTopLeft: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  circleLeftMiddle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    position: 'absolute',
    top: '50%',
    left: 10,
    marginTop: -50,
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

});

export default styles;