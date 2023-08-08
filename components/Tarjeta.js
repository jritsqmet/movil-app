import { View, Text, TouchableOpacity, Modal, Button, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(prop) {
   // console.log(prop)
    const [modalVisvible, setmodalVisvible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => setmodalVisvible(!modalVisvible)}
            >

                <Text>{prop.datos.nombre}</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisvible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Text style={styles.txt}>Nombre: {prop.datos.nombre}</Text>
                    <Image 
                        source={{ uri : prop.datos.url}}
                        style={styles.img}
                    />
                    <Text style={styles.txt}>Descripcion: {prop.datos.descripcion} </Text>

                    <Button
                        title='Cancelar'
                        onPress={() => setmodalVisvible(false)}
                    />
                </View>

            </Modal>

        </View>
    )
}


const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(0, 30,0, 0.8)',
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    txt:{
        fontSize: 25,
        color:'white'
    },
    img:{
        width:300,
        height:200
    }
});