import React from 'react'
import { Image, StyleSheet } from 'react-native'


export default function Logo({ source }) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 15,
  },
})
