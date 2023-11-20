import React, { useState } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import { View, Text, Dimensions , TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import OTPInput from '../components/OTPInput'; 
import CustomButton from '../components/Button';
import { emailValidator } from '../helpers/emailValidator';
import { theme } from '../core/theme';
import styles from "../components/Styles";

const { height } = Dimensions.get('window');

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [showOTPInput, setShowOTPInput] = useState(false); 


  const sendResetPasswordEmail = () => {
    if (showOTPInput) {
navigation.replace('newPasswordScreen')  ;
    console.log('OTP input is already shown');   
    }
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
  
    setShowOTPInput(true);
  };
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo source={require('../images/resetPassword.png')} />
      <Header>{showOTPInput ? 'Verifier de votre email' : 'Mot de passe oublié ?'}</Header>

      {showOTPInput ? (
        <OTPInput />
      ) : (
        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      )}

      <CustomButton
        label={showOTPInput ? 'Vérifier' : 'Send Reset Email'}
        onPress={sendResetPasswordEmail}
        borderColor="transparent"
        backgroundColor="white"
        textColor={theme.colors.BgColor}
        paddingHorizontal={height}
      />
       <View style={{ height: 15 }} />
      {showOTPInput ? (
  <View style={styles.row}>
    <TouchableOpacity onPress={() => navigation.replace('ResetPasswordScreen')}>
      <Text style={styles.link}>
        Vous n'avez pas recu de code ? Renvoyer le code
      </Text>
    </TouchableOpacity>
  </View>
) : null}
    </Background>
  );
}
