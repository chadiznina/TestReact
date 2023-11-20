import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity , Dimensions } from "react-native";
import { login } from "../actions/auth";
import Modal from 'react-native-modal';
import styles from "../components/Styles";
import  CustomButton  from "../components/Button";
import Background from '../components/Background'
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { theme } from '../core/theme'
import Paragraph from "../components/Paragraph";

const { width, height } = Dimensions.get('window');




const Login = ({ navigation }) => {


  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const onLogin = () => {
    const usernameError = emailValidator(username.value)
    const passwordError = passwordValidator(password.value)
    let user = {
      username: username.value,
      password: password.value,
    };
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      return
    }  
    dispatch(login(user))
      .then((response) => {
        if (response && response.status === 'success') {
          navigation.replace('HomeScreen');
        } else {
          setErrorMessage('Login failed. Please try again.'); 
          setErrorModalVisible(true); 
        }
      })
      .catch((error) => {
        setErrorMessage('Login failed. Please try again.');
        setErrorModalVisible(true); 
      });
  };
  const closeModal = () => {
    setErrorModalVisible(false);
  };

return (
  <Background>
    <Logo source={require('../images/Onboarding1.png')} />
    <Header>Coclick.</Header>  
   <Paragraph>
   Commandez en toute simplicité chez les commerçants les plus proches de chez vous
      </Paragraph>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
       <TextInput
        label="Mot de Passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry            
      />
        <View style={{ height: 15 }} />
      <CustomButton
            label="Connexion"
            onPress={() => onLogin()}
            borderColor="transparent"
            backgroundColor="white" 
            textColor={theme.colors.BgColor}    
            paddingHorizontal= { height }
                  
          />     
      {/* Error Modal */}
      <Modal isVisible={errorModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{errorMessage}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{ height: 15 }} />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('ResetPasswordScreen')}>
          <Text style={styles.link}>Mot de passe oublié</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default Login;
