import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home.js";
import EventoPersonaje from "./src/screens/EventoPersonaje.js";
import DetallePersonaje from "./src/screens/DetallePersonaje.js";
import DetalleDelEvento from "./src/screens/DetalleDelEvento.js";
import Footer from "./src/componentes/Footer.jsx";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Marvel App",
            headerRight: () => (
              <View>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </View>
            ),
            headerStyle: {
              height: 150,
              backgroundColor: "#e23636",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="EventoPersonaje"
          component={EventoPersonaje}
          options={{
            title: "Events",
            headerRight: () => (
              <View>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </View>
            ),
            headerStyle: {
              height: 150,
              backgroundColor: "#e23636",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="DetallePersonaje"
          component={DetallePersonaje}
          options={{
            title: "Character",
            headerRight: () => (
              <View>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </View>
            ),
            headerStyle: {
              height: 150,
              backgroundColor: "#e23636",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="DetalleDelEvento"
          component={DetalleDelEvento}
          options={{
            title: "Event Details",
            headerRight: () => (
              <View>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </View>
            ),
            headerStyle: {
              height: 150,
              backgroundColor: "#e23636",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
