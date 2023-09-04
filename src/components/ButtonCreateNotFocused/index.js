import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {AntDesign} from '@expo/vector-icons'

export default function ButtonCreateFocused({ size }) {
  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={50} color='transparent' />
      <AntDesign name='plus' size={25} color='gray' style={styles.smallIcon} />
      <Text style={styles.text}>Criar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 55, // corrigi "widht" para "width"
    height: 55,
    top: -25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center', // para centralizar os ícones e o texto
    justifyContent: 'center', // para centralizar os ícones verticalmente
  },
  smallIcon: {
    position: 'absolute', // posicionamento absoluto para sobrepor
    top: '50%',  // centralizar verticalmente
    left: '50%', // centralizar horizontalmente
    transform: [
      { translateX: -12.5 }, // metade do tamanho do ícone menor (25 / 2)
      { translateY: -12.5 }  // metade do tamanho do ícone menor (25 / 2)
    ]
  },
  text: {
    fontSize: 11,
    marginTop: 22,
    textAlign: 'center',
    color: 'gray'
  }
})