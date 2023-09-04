import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyPurchases() {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  }
})