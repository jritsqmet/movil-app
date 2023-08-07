import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native'

import Tarjeta from '../components/Tarjeta';

export default function Grupo2Screen() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [url, seturl] = useState("")

  const [listaImagenes, setlistaImagenes] = useState([]);

  const agregarElementos = (nombre, descripcion, url) => {

   

    if( nombre.trim() !== '' && descripcion.trim() !== ''  && url.trim() !==''   ){
      console.log(nombre);
      let bandera=false;

      for( let item of listaImagenes){
        if( nombre == item.nombre){
          bandera=true;
          break;
        }
      }

      if( bandera == true){
       
      }else{
        let temp = [...listaImagenes, { nombre, descripcion, url } ];
        setlistaImagenes(temp)
      }

      

      setnombre('');
      setdescripcion('');
      seturl('');

    }else{
      Alert.alert("Advertencia", "LLene todos los campos")
    }


  }

 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }}>EJERCICIO 2</Text>
      <TextInput
        placeholder='Ingrese nombre'
        style={styles.input}
        onChangeText={(texto) => setnombre(texto)}
        value={nombre}
      />
      <TextInput
        placeholder='Ingrese descripcion'
        multiline={true}
        style={styles.input}
        onChangeText={(texto) => setdescripcion(texto)}
        value={descripcion}
      />
      <TextInput
        placeholder='Ingrese una URL'
        style={styles.input}
        onChangeText={(texto) => seturl(texto)}
        value={url}
      />
      <Button
        title='Agregar'
        onPress={() => agregarElementos( nombre, descripcion, url)}
      />

      <View
        style={{ borderWidth: 1, width: "90%", marginBottom: 10, marginTop: 10 }}
      />
      

      <FlatList
        data={listaImagenes}
        renderItem={({ item }) => (
          <Tarjeta  datos= {item} />
        )}
      />

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
