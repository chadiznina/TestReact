import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard ,Dimensions} from 'react-native';
import { theme } from '../core/theme';
import Paragraph from "../components/Paragraph";
const { height , width} = Dimensions.get('window');



const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']); 

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value !== '') {
      refs[index + 1].focus();
    } else if (index === otp.length - 1 && value !== '') {
      Keyboard.dismiss();
    }
  };

  const refs = [];

  return (
    <View style={styles.container}>
      <Paragraph >Veuillez renseigner le code que vous avez reçu par email: </Paragraph>
      <View style={{ height: 30 }} />
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpDigit}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={(ref) => (refs[index] = ref)}
          />
        ))}
      </View>
      <View style={{ height: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: theme.colors.white,
    marginBottom: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpDigit: {
    width: 50, // Increase the width
    height: 50, // Increase the height
    borderWidth: 1,
    borderColor: theme.colors.OtpGreen, // Set the border color to white
    borderRadius: 12, // Increase the border radius
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 5,
    color: 'white', // Set the text color to white
    backgroundColor: theme.colors.OtpGreen, // Set the background color to green
  },

});

export default OTPInput;
