import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Grupo2Screen() {
  return (
    <View style={styles.container}>
      <Text>GRUPO 2</Text>
      <Text>Christian Hidalgo</Text>
      <Text>Wladimir Tierra</Text>
      <Text>Jorge Urgilés</Text>
      <Text>Juan Paz</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});