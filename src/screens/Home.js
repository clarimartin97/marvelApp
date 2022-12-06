import { urlBase, timeZone, apikey, hash, limit, eventos } from "../constantes.js";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from "react-native";
import { Image } from "@rneui/themed";
import { useEffect, useState } from "react";
import StyledText from "../componentes/StyledText";
import theme from "../theme.js";

function HomeScreen(props) {
    const { navigation } = props;
    const [personajes, setPersonajes] = useState([]);
    const [textoDeInput, setTextoDeInput] = useState("");
    const navegarADetallePersonaje = (personaje) => {
        navigation.navigate("DetallePersonaje", { personaje })
    }
    useEffect(() => {
        getData()
    }, [])


    const busquedaDePersonajes = (txt) => {
        setTextoDeInput(txt)
    }

    const renderItem = ({ item, key }) => {
        return (
            <TouchableOpacity onPress={() => {
                navegarADetallePersonaje(item)
            }} style={styles.card}>
                <View >
                    <Image style={styles.image} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />

                </View>
                <View style={styles.nombre}>
                    <StyledText align="start" fontWeight="bold" >
                        {item.name}
                    </StyledText>

                </View>
            </TouchableOpacity>
        )
    }

    const keyExtractor = (item) => {
        return (item.id);
    }
    const getData = async () => {
        const response = await fetch(`${urlBase}?${timeZone}${limit}${apikey}${hash}&${eventos}`)
        const data = await response.json();
        setPersonajes(data.data.results);
    };
    const getPersonasFiltradas = () => {
        let personasFiltradas = [...personajes];
        if (textoDeInput !== "") {
            personasFiltradas = personasFiltradas.filter((p, index) => (
                p.name.includes(textoDeInput)
            ))
        }
        return personasFiltradas;
    };
    const personasFiltradas = getPersonasFiltradas();
    return (
        <View style={styles.container}>
            <StyledText align="start" fontWeight="bold" >
                Buscar personajes:
            </StyledText>
            <TextInput placeholder="Buscar.." style={styles.input} value={textoDeInput} onChangeText={busquedaDePersonajes} />

            <View>
                <FlatList
                    data={personasFiltradas}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    nombre: {
        justifyContent: "center",
        paddingLeft: 10
    },
    modalidad: {
        padding: 3,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4,
        overflow: "hidden",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-even",
        padding: 9,
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
        backgroundColor: "#FFF",
        color: "white",
        marginBottom: 10,
        borderRadius: 4,
        overflow: "hidden",
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,

    },
    container: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    image: {
        width: 105,
        height: 105,
        borderRadius: 4,
        justifyContent: "space-even",
    },
});

export default HomeScreen