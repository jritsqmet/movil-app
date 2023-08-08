import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import * as FileSystem from 'expo-file-system'


export default function Grupo4Screen() {

  const [titulo, settitulo] = useState("")
  const [mensaje, setmensaje] = useState("")
  const [tareas, settareas] = useState([]);

  const [indiceE, setindiceE] = useState(-1)

  useEffect(() => {
    cargar()
  }, [])
  

  //ALMACENAR  && EDITAR
  function enviar( ) {

    if(indiceE === -1){
      const nuevasTareas = [...tareas, { titulo, mensaje }]
      settareas(nuevasTareas)
    }else{
      const nuevasTareas = [...tareas]
      nuevasTareas[indiceE] = {titulo, mensaje }
      settareas(nuevasTareas)
      setindiceE(-1)
    }

    guardar();
    
  }

 //ELIMINAR
 function eliminar(indice){
  const nuevasTareas = tareas.filter( (item, i)=> i !== indice );
  settareas( nuevasTareas)
 }

 //EDITAR
 function editar( indice ){
  const tareaEditar = tareas[indice]
  settitulo( tareaEditar.titulo);
  setmensaje( tareaEditar.mensaje)

  setindiceE(indice)
 }

 // LOCAL STORAGE - GUARDAR
 const guardar = async () =>{
    try{
      const file = `${FileSystem.documentDirectory}datos.json`;
      await FileSystem.writeAsStringAsync( file , JSON.stringify(tareas));
      console.log("Datos guardados")
    } catch (error){
      console.log(error)
    }
 }

 // LOCAL STORAGE - CARGAR
 const cargar = async()=>{
    try{
      const file = `${FileSystem.documentDirectory}datos.json`;
      const existe = await FileSystem.getInfoAsync(file)

      if (existe.exists){
        const contenido = await FileSystem.readAsStringAsync(file);
        const datos = JSON.parse(contenido)
        settareas(datos);
        console.log("Datos cargados")
      }

    } catch (error){
      console.log(error)
    }
 }




  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Ingrese título'
        style={styles.input}
        onChangeText={(texto) => settitulo(texto)}
        value={titulo}
      />

      <TextInput
        placeholder='Ingrese Mensaje'
        style={styles.input}
        onChangeText={(texto) => setmensaje(texto)}
        value={mensaje}
      />

      <Button title='Enviar'  onPress={()=> enviar()}/>

      <View
        style={{ borderWidth: 1, width: "90%", marginBottom: 10, marginTop: 10 }}
      />

      <View style={{ width:300}}>
      <FlatList
        data= {tareas}
        renderItem={({item, index})=>
          <View style={styles.lista}>
            <Text>Título: {item.titulo}</Text>
            <Text>Mensaje: {item.mensaje}</Text>
            <View style={styles.fila}>
            <Button  title='Eliminar' color={"red"} onPress={()=>eliminar(index)}/>
            <Button  title='Editar' color={'green'}  onPress={()=> editar(index)}/>


            </View>
          </View>
      }
      />
      </View>


    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

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
  },
  lista:{
    backgroundColor: "#d3f7bf",
    width: '100%',
    marginBottom: 10,
  },

  fila:{
    flexDirection:'row',
    justifyContent:'space-between'

  }


});