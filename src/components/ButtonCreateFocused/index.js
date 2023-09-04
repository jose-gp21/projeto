import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonCreateFocused({ size }) {
  return (
    <LinearGradient
      colors={['#8C52FF','#FF5757']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <AntDesign name='plus' size={50} color='transparent' />
      <AntDesign name='plus' size={25} color='white' style={styles.smallIcon} />
      <Text style={styles.text}>Criar</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    top: -25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -12.5 },
      { translateY: -12.5 }
    ]
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
    marginTop: 22,
  }
});