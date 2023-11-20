import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomButton = ({ label, onPress, borderColor, backgroundColor,borderWidth, borderRadius, textColor, paddingHorizontal , style }) => {

  const PaddingHorizontal = width * 0.30; 
  const PaddingVertical = height * 0.02; 

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          borderColor: borderColor ,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius || 32,
          paddingHorizontal: PaddingHorizontal,
          paddingVertical: PaddingVertical,
          borderWidth: borderWidth || 1
        },
        style,
      ]}
    >
      <Text style={[styles.buttonText, { color: textColor || 'black' }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily:'Work Sans'
  },
});

export default CustomButton;