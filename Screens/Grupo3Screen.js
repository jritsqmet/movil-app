import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import { useEffect, useState } from 'react';

import userJSON from '../assets/data/users.json'


export default function Grupo3Screen() {

    const [usuario, setusuario] = useState("");
    const [contrasenia, setcontrasenia] = useState("");

    //const [listaUsuarios, setlistaUsuarios] = useState(userJSON.users)
    const [listaUsuarios, setlistaUsuarios] = useState(null)

    // USE EFFECT
    const API_USER= "https://my-json-server.typicode.com/jritsqmet/jsonpass/db"
   
   /*
    useEffect(() => {
      fetch(API_USER)
      .then( response => response.json())
      .then( datos => setlistaUsuarios(datos))
    }, []);
    */
    
     useEffect(() => {
      if( listaUsuarios == null){
        fetch(API_USER)
        .then( response => response.json())
        .then( datos => setlistaUsuarios(datos))
      }
    }, [listaUsuarios])
    
    console.log(listaUsuarios.users)


    function verificarUsuario( user, pass){
     /*
      for (let item of listaUsuarios.users){
          if( user  == item.username){
            if( pass == item.password){
              Alert.alert( "MENSAJE", 'Acceso correcto' )
            }else{
              Alert.alert("MENSAJE", "Credenciales incorrectas")
            }
          }
      }
      */

      //const found = array1.find((element) => element > 10);
      if( listaUsuarios.users.find( (user) => user >=0 ) ){
        if( pass == user[user].password ){
          Alert.alert( "MENSAJE", 'Acceso correcto' )
        }else{
          Alert.alert("MENSAJE", "Credenciales incorrectas")
        }
      }else{
        console.log("error")
      }


    }
  


  return (
    <View style= {styles.container}>
      <Text style={{fontSize: 35}}>EJERCICIO 3</Text>
      <TextInput 
        placeholder='Ingrese usuario'
        style={styles.input}
        onChangeText={ ( texto ) => setusuario( texto ) } 
      />

      <TextInput 
        placeholder='Ingrese contraseña'
        style={styles.input}
        onChangeText={ ( texto ) => setcontrasenia( texto ) }
      />

      <Button title='LogIn' onPress={()=> verificarUsuario( usuario, contrasenia  )}/>

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
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});