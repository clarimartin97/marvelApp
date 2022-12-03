import React from 'react'
import Moment from 'moment';
import { View, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import StyledText from '../componentes/StyledText.jsx'
import { Button, Icons, Image } from "@rneui/themed";
import { useEffect, useState } from "react";


function DetalleDelEvento(props) {
    const { navigation, route } = props;
    const { cantidadPersonajesEvento, descripcionEvento, fechaInicioEvento, fechaFinEvento, fotoEvento, nombreEvento } = route.params
    console.log(route.params)

    const navegarAHome = () => {
        navigation.navigate("Home")
    }


    return (
        <View style={styles.container}>
            <View>
                <Button title='Ir al inicio' onPress={navegarAHome} />

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image source={{ uri: fotoEvento }} style={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="#F1464C" />} />
                        <StyledText>{nombreEvento}</StyledText>
                        <StyledText>{Moment(fechaInicioEvento).format('d MMM yyyy')}</StyledText>
                        <StyledText>{Moment(fechaFinEvento).format('d MMM yyyy')}</StyledText>
                        <StyledText>{descripcionEvento}</StyledText>
                        <StyledText>{cantidadPersonajesEvento}</StyledText>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 65,
        borderRadius: 4,
        alignContent: 'center'
    },
    container: {
        alignContent: 'center',
        margin: 37
    }
})

export default DetalleDelEvento