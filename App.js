import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../obligatorio2/src/screens/Home.js'
import EventoPersonaje from "./src/screens/EventoPersonaje.js";
import DetallePersonaje from "./src/screens/DetallePersonaje.js"
import DetalleDelEvento from "./src/screens/DetalleDelEvento.js";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Marvel App",
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventoPersonaje" component={EventoPersonaje} />
        <Stack.Screen name="DetallePersonaje" component={DetallePersonaje} />
        <Stack.Screen name="DetalleDelEvento" component={DetalleDelEvento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
