import React, { useState } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import { View, Dimensions } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import CustomButton from '../components/Button';
import Paragraph from '../components/Paragraph';
import { passwordValidator, passwordVerification } from '../helpers/passwordValidator';
import { theme } from '../core/theme';

const { height } = Dimensions.get('window');

export default function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState({ value: '', error: '' });
  const [verifPassword, setVerifPassword] = useState({ value: '', error: '' });

  const onChange = () => {
    const passwordError = passwordValidator(password.value);
    const verifPasswordError = passwordValidator(verifPassword.value);
    const notSamePassError = passwordVerification(password.value, verifPassword.value);

    if (passwordError || verifPasswordError || notSamePassError) {
      setPassword({ ...password, error: passwordError });
      setVerifPassword({ ...verifPassword, error: verifPasswordError });
      return;
    }
    else navigation.replace('HomeScreen');
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo source={require('../images/resetPassword.png')} />
      <View style={{ height: 15 }} />
      <Header>{'Mot de passe oublié ?'}</Header>
      <View style={{ height: 15 }} />
      <Paragraph>Veuillez renseigner votre nouveau mot de passe </Paragraph>
      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
      <TextInput
        label="Confirmation mot de passe"
        returnKeyType="done"
        value={verifPassword.value}
        onChangeText={(text) => setVerifPassword({ value: text, error: '' })}
        error={!!verifPassword.error}
        errorText={verifPassword.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />
      <CustomButton
        label={'Réinitialiser mot de passe '}
        borderColor="transparent"
        backgroundColor="white"
        textColor={theme.colors.BgColor}
        onPress={onChange} // Fix: Use resetPassword function as onPress callback
      />
    </Background>
  );
}
