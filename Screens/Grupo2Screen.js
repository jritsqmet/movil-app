import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Grupo2Screen() {
  return (
    <View>
      <Text>GRUPO 2</Text>
      <Text>Christian Hidalgo</Text>
      <Text>Wladimir Tierra</Text>
      <Text>Jorge Urgilés</Text>
      <Text>Desarrollo de software</Text>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
