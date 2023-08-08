import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Ejercicio1Screen() {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [respuesta, setRespuesta] = useState(0)

  //USE EFFECT
  useEffect(() => {
    //Alert.alert("Mensaje")
      if( numero2 > 9 ){
        setNumero2( 9 )
        Alert.alert("Mensaje", "No se admiten número mayores de 10")
      }

      if( numero2 < -10 ){
        setNumero2(-10)
      }
   
  }, [numero2, numero1])
  


  function aumentar() {
    if( numero1 <10 ){
      setNumero1(numero1 + 1);
    }else{
      Alert.alert("Mensaje", "Ha llegado al número máximo")
    }
  }

  function disminuir() {
    if( numero1 >0 ){
      setNumero1(numero1 - 1);
    }
    
  }

  function reiniciar(){
    setNumero1(0);
    setNumero2(0);
    setRespuesta(0)
  }

  function suma() {
    setRespuesta(numero1 + numero2)
  }

  function calcular ( operacion ){
    switch (operacion){
      case '+':
        setRespuesta( numero1 + numero2 )
        break;

      case '-':
        setRespuesta( numero1 - numero2)
        break;

      case '*':
        setRespuesta( numero1 * numero2)
        break;

      case '/':
        if ( numero2 !==0){
          setRespuesta( numero1 / numero2)
        }else{
          Alert.alert("Advertencia", "No existe la división para cero")
        }
        break;
    }
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }}>EJERCICIO 1</Text>

      <View style={styles.fila}>

        <Button title='Disminuir' onPress={() => disminuir()} />
        <Text style={{ fontSize: 20 }}>     {numero1}     </Text>
        <Button title='Aumentar' onPress={() => aumentar()} />

      </View>

      <View style={styles.fila}>
        <Button
          title='Disminuir'
          onPress={() => setNumero2(numero2 - 1)}
        />
        <Text style={{ fontSize: 20 }} >     {numero2}     </Text>

        <Button title='Aumentar' onPress={() => setNumero2(numero2 + 1)} />

      </View>

      <View
        style={{ borderWidth: 1, width: "90%", marginTop: 10, marginBottom: 10 }}
      />

      <Text style={{ fontSize: 20 }}>{respuesta}</Text>

      <Button title='Reiniciar' color={'red'} onPress={()=> reiniciar()}/>

      <Button title='Suma'  color = {'green'} onPress={() => calcular('+') } />
      <Button title='Resta' color ={'green'} onPress={() => calcular('-')}/>
      <Button title='Multiplicación' color ={'green'} onPress={ () => calcular('*')}/>
      <Button title='División' color ={'green'}  onPress={() => calcular('/')}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fila: {
    flexDirection: 'row',
    marginBottom: 10
  }
});