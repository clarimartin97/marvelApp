import React from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import StyledText from '../componentes/StyledText.jsx'
import { Button, Image, Icon } from "@rneui/themed";
import { useEffect, useState } from "react";
import { urlBase, timeZone, apikey, hash, limit, events } from "../constantes.js";

function EventoPersonaje(props) {
    const { navigation, route } = props;
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(false);
    const personajeId = route.params.idDePersonaje

    const navegarAHome = () => {
        navigation.navigate("Home")
    }
    const navegarADetalleDelEvento = (foto, nombre, fechaInicio, fechaFin, descripcion, cantidadPersonajes) => {
        navigation.navigate("DetalleDelEvento", { fotoEvento: foto, nombreEvento: nombre, fechaInicioEvento: fechaInicio, fechaFinEvento: fechaFin, descripcionEvento: descripcion, cantidadPersonajesEvento: cantidadPersonajes })
    }
    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        setLoading(true);
        let url = `${urlBase}/${personajeId}${events}${timeZone}${limit}${apikey}${hash}`
        const response = await fetch(url)
        const data = await response.json();
        setEventos(data.data.results);
        setLoading(false);
    };

    const keyExtractor = (item) => {
        return (item.id);
    }

    const renderItem = ({ item, key }) => {
        return (
            <TouchableOpacity onPress={() => { navegarADetalleDelEvento(`${item.thumbnail.path}.${item.thumbnail.extension}`, item.title, item.start, item.end, item.description, item.characters.available) }}>
                <View style={styles.container}>
                    <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} style={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="#F1464C" />} />
                    <StyledText fontWeight='bold' color='primary' style={styles.tituloNombre}>{item.title}</StyledText>
                </View>
            </TouchableOpacity>
        )
    }
    if (loading)
        return (

            <View style={{ flex: 1, marginTop: 300 }}>

                <ActivityIndicator size={30} color="#F1464C" />
            </View>
        )
    else
        return (
            <View style={styles.container}>
                <View>
                    <Button style={styles.button} type="outline" size="sm" onPress={navegarAHome} > <Icon
                        name="home"
                        size={20}
                        color="blue"
                    /> </Button>
                    <FlatList
                        data={eventos}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>

            </View>
        )

}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 14,
    },
    container: {
        padding: 10,
        paddingBottom: 10,
        paddingTop: 20,
        alignSelf: "center"

    },
    tituloNombre: {
        fontSize: 30,
        fontFamily: "System",
        marginBottom: 30,
        alignSelf: "center"
    },
    button: {
        width: 60
    },
})

export default EventoPersonaje