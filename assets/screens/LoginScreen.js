import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button ,TouchableOpacity } from "react-native";
import { login } from "../actions/auth";
import Modal from 'react-native-modal';
import styles from "../components/Styles";


const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
const onLogin = () => {
    let user = {
      username: username,
      password: password,
    };
dispatch(login(user))
      .then((response) => {
        if (response.status == "success") {
          navigation.replace("HomeScreen");
        }
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      setErrorMessage('Logout failed. Please try again.'); // Set the error message
      setErrorModalVisible(true); // Show the error modal
      });
  };
  const closeModal = () => {
    setErrorModalVisible(false);
  };

return (
    <View style={Styles.container}>
      <Text style={Styles.headerTitle}>Please Login to your account</Text>
      <TextInput
        style={Styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={Styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder="password"
      />
      <Button onPress={() => onLogin()} title="Login" />
      
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
export default Login;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
  },
  input: {
    width: 360,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    marginVertical: 10,
  },
});