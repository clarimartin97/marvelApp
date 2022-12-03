import React from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native'
import StyledText from '../componentes/StyledText.jsx'
import { Button, Icons, Image } from "@rneui/themed";
import { useEffect, useState } from "react";


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
        let url = `https://gateway.marvel.com/v1/public/characters/${personajeId}/events?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3`
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
                    <StyledText>{item.title}</StyledText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Button title='Ir al inicio' onPress={navegarAHome} />
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

export default EventoPersonaje