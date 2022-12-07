import React from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { Button, Image } from "@rneui/themed";
import StyledText from "../componentes/StyledText.jsx";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DetallePersonaje(props) {
    const { navigation, route } = props
    const personaje = route.params.personaje
    const navegarAEventoPersonaje = (id) => {
        navigation.navigate("EventoPersonaje", { idDePersonaje: id })
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            justifyContent: 'space-evenly', flex: 1
        }}>
            <Image source={{ uri: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}` }} style={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="#F1464C" />} />
            <View>
                <StyledText style={styles.tituloNombre} fontWeight='bold' >{personaje.name} </StyledText>
            </View>
            <View>
                <StyledText color='primary' fontSize='subheading' fontWeight='bold' >{personaje.description} </StyledText>
            </View>


            <View style={styles.estiloIconos}>
                <View style={styles.container}>
                    <View style={styles.direccion}>
                        <MaterialCommunityIcons name="star" size={24} color="black" />
                        <StyledText fontSize='subheading' fontWeight='bold' > Number of comics: {personaje.comics.available}</StyledText>
                    </View>
                    <View style={styles.direccion}>
                        <MaterialCommunityIcons name="paperclip" size={24} color="black" />
                        <StyledText fontSize='subheading' fontWeight='bold' >Number of series: {personaje.series.available}</StyledText>
                    </View>
                    <View style={styles.direccion}>
                        <MaterialCommunityIcons name="heart" size={24} color="black" />
                        <StyledText fontSize='subheading' fontWeight='bold' >Number of stories: {personaje.stories.available}</StyledText>
                    </View>
                    <View style={styles.direccion}>
                        <MaterialCommunityIcons name="all-inclusive" size={24} color="black" />
                        <StyledText fontSize='subheading' fontWeight='bold' >Total sum: {`${personaje.comics.available + personaje.series.available + personaje.stories.available}`}</StyledText>
                    </View>
                </View>

            </View>

            <Button style={styles.button} title={`Events from ${personaje.name}`} onPress={() => { navegarAEventoPersonaje(personaje.id) }} />


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 14,
        margin: 20,
        alignSelf: "center"
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignSelf: "center",
    },
    container: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 20,
        alignSelf: "center"
    },
    tituloNombre: {
        fontSize: 30,
        fontFamily: "System",
        color: "#000000",
        marginBottom: 30,
        alignSelf: "center"
    },
    direccion: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    estiloIconos: { flexDirection: "row", justifyContent: "space-evenly", margin: 10 }
})

export default DetallePersonaje;
