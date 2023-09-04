import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonBag() {
  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={['#8C52FF', '#FF5757']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <SimpleLineIcons name="handbag" size={22} color="white" />
      </LinearGradient>
      <View style={styles.plusIconWrapper}>
        <Entypo name="plus" size={18} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: 40,
    height: 50,
    position: 'relative',
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIconWrapper: {
    position: 'absolute',
    top: -5,  // Ajuste conforme necessário
    left: -5,  // Ajuste conforme necessário
    width: 18,
    height: 18,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
