import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CirclesBackground = () => {
  const renderCircles = () => {
    const circles = [];

  
    const radius1 = width * 0.20; 
    const radius2 = width * 0.15; 
    circles.push(
      <View
        key={0}
        style={{
          left: radius1* 0.00000005,
          top: radius1 * 0.00000005 , 
          width: radius1 * 2,
          height: radius1 * 2,
          borderRadius: radius1,
          backgroundColor: 'rgba(100, 212, 189, 0.36)',
        
        }}
      />
    );
    circles.push(
      <View
        key={1}
        style={{
          position: 'absolute',
          left: width * 0.85,
          top: height / 2.5 - radius2, 
          width: radius2 * 2,
          height: radius2 * 2,
          borderRadius: radius2,
          backgroundColor: 'rgba(100, 212, 189, 0.36)',
        }}
      />
    );

    return circles;
  };

  return <View style={styles.container}>{renderCircles()}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CirclesBackground;