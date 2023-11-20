import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { logout } from '../actions/auth';
import Modal from 'react-native-modal';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogout = useCallback(async () => {
    try {
      const response = await dispatch(logout());

      if (response.status === 'success') {
        navigation.replace('OnboardingScreen');
      }
    } catch (error) {
      console.error('Logout failed:', error);
      setErrorMessage('Logout failed. Please try again.'); // Set the error message
      setErrorModalVisible(true); // Show the error modal
    }
  }, [dispatch, navigation]);

  const closeModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Error Modal */}
      <Modal isVisible={errorModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{errorMessage}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
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
});

export default Home;
