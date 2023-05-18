import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarFruta from "./screens/BuscarFruta";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BuscarProduto" component={BuscarProduto} />
        <Stack.Screen name="BuscarPessoa" component={BuscarPessoa} />
        <Stack.Screen name="BuscarFruta" component={BuscarFruta} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
