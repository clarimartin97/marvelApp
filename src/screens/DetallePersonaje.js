import React from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Image } from "@rneui/themed";
import StyledText from "../componentes/StyledText.jsx";

function DetallePersonaje(props) {
    const { navigation, route } = props
    const personaje = route.params.personaje
    const navegarAEventoPersonaje = (id) => {
        navigation.navigate("EventoPersonaje", { idDePersonaje: id })
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Image source={{ uri: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}` }} style={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="#F1464C" />} />
            <View>
                <StyledText fontSize='subheading' fontWeight='bold' >{personaje.nombre}</StyledText >
                <StyledText >{personaje.comics.available}</StyledText>
                <StyledText >{personaje.series.available}</StyledText>
                <StyledText >{personaje.stories.available}</StyledText>
                <StyledText >{`${personaje.comics.available + personaje.series.available + personaje.stories.available}`}</StyledText>
            </View>

            <Button title={`Eventos de ${personaje.name}`} onPress={() => { navegarAEventoPersonaje(personaje.id) }} />


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        alignContent: 'center'
    }
})

export default DetallePersonaje;
