import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Create() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  text:{
    color: 'white'
  }
})