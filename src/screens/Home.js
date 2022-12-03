export const urlBase = "https://gateway.marvel.com/v1/public/characters"
const timeZone = "ts=1000";
const apikey = "&apikey=b6847664cfd533605e325588b62af044";
const hash = "&hash=4990c9ec6007b3a745c1bbc20f22b7a3";
const limit = "&limit=100";
export const eventos = "events=321,314,315";
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
                navegarADetallePersonaje(item) //este item es personaje
            }
            }
                style={styles.card}>
                <View>
                    <Image style={styles.image} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />

                </View>
                <View style={{ justifyContent: "center" }}>
                    <StyledText align="start" fontWeight="bold" >
                        {item.name}
                    </StyledText>

                </View>
                <View style={{ justifyContent: "center" }}>
                    <StyledText color="secondary" align="end">
                        Appears in:
                    </StyledText>
                    <StyledText color="secondary" align="end">
                        {item.comics.available} comics
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
            <Text>
                Bienvenido a la pagina de Marvel
            </Text>
            <TextInput style={styles.input} value={textoDeInput} onChangeText={busquedaDePersonajes} />

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
        justifyContent: "space-around",
        paddingBottom: 2, textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
        backgroundColor: "#F1464C",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 4,
        overflow: "hidden",
    },
    input: {
        backgroundColor: "white", width: "70%", height: 35, alignItems: "center", borderWidth: 1
    },
    container: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10

    },
    horizontalText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 4,
        alignContent: 'center'
    },
});

export default HomeScreen