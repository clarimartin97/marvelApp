import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home.js"
import EventoPersonaje from "./src/screens/EventoPersonaje.js";
import DetallePersonaje from "./src/screens/DetallePersonaje.js"
import DetalleDelEvento from "./src/screens/DetalleDelEvento.js";
import Footer from './src/componentes/Footer.jsx'
import { View, TouchableOpacity, } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Marvel App",
        }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => (<View>
            <TouchableOpacity style={{ marginLeft: 15 }} />
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#000" />
          </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#e23636",
            shadowColor: "#000",
            elevation: 25,
          }
        }} />
        <Stack.Screen name="EventoPersonaje" component={EventoPersonaje} options={{
          headerRight: () => (<View>
            <TouchableOpacity style={{ marginLeft: 15 }} />
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#000" />
          </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#e23636",
            shadowColor: "#000",
            elevation: 25,
          }
        }} />
        <Stack.Screen name="DetallePersonaje" component={DetallePersonaje} options={{
          headerRight: () => (<View>
            <TouchableOpacity style={{ marginLeft: 15 }} />
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#000" />
          </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#e23636",
            shadowColor: "#000",
            elevation: 25,
          }
        }} />
        <Stack.Screen name="DetalleDelEvento" component={DetalleDelEvento} options={{
          headerRight: () => (<View>
            <TouchableOpacity style={{ marginLeft: 15 }} />
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#000" />
          </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#e23636",
            shadowColor: "#000",
            elevation: 25,
          }
        }} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}


