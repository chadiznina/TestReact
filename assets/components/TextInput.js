import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
       
          {...props}
        />
      </View>
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 32,
    overflow: 'hidden',
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    color: theme.colors.white,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
