import React from 'react'
import Moment from 'moment';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import StyledText from '../componentes/StyledText.jsx';
import { Button, Image, Icon } from "@rneui/themed";
import { Octicons } from '@expo/vector-icons';


function DetalleDelEvento(props) {
    const { navigation, route } = props;
    const { cantidadPersonajesEvento, descripcionEvento, fechaInicioEvento, fechaFinEvento, fotoEvento, nombreEvento } = route.params
    console.log(route.params)

    const navegarAHome = () => {
        navigation.navigate("Home")
    }
    return (
        <ScrollView>
            <Button style={styles.button} type="outline" size="sm" onPress={navegarAHome} > <Icon
                name="home"
                size={20}
                color="blue"
            /> </Button>
            <View style={styles.container}>


                <TouchableOpacity >
                    <View style={styles.container}>
                        <Image source={{ uri: fotoEvento }} style={styles.image} PlaceholderContent={<ActivityIndicator size={30} color="#F1464C" />} />
                        <StyledText style={styles.tituloNombre} fontWeight='bold' >{nombreEvento}</StyledText>
                        <View style={styles.direccion}>
                            <StyledText fontWeight='bold' >{Moment(fechaInicioEvento).format('d MMM yyyy')} - </StyledText>
                            <StyledText fontWeight='bold'>{Moment(fechaFinEvento).format('d MMM yyyy')}</StyledText>
                        </View>
                        <StyledText color='primary' fontSize='subheading' fontWeight='bold' >{descripcionEvento}</StyledText>
                        <StyledText ><Icon
                            name="star"
                            size={22}
                            color="blue"
                        /> Personajes en el evento: {cantidadPersonajesEvento}</StyledText>
                    </View>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        borderRadius: 4,
        alignContent: 'center'
    },
    container: {
        alignContent: 'center',
        margin: 27,
        backgroundColor: "gray",
        borderRadius: 18,
        backgroundColor: "#d8dce3",
    },
    button: {
        width: 60,
        marginTop: 30,
        marginLeft: 30,
    },
    tituloNombre: {
        fontSize: 30,
        fontFamily: "System",
        color: "#000000",
        marginBottom: 20,
    },
    direccion: {
        flexDirection: "row",
        alignSelf: 'center',
        paddingBottom: 10,
    }
})

export default DetalleDelEvento