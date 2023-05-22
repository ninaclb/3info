import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarCor from "./screens/BuscarCor";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarAnimal from "./screens/BuscarAnimal";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BuscarProduto" component={BuscarProduto} />
        <Stack.Screen name="BuscarPessoa" component={BuscarPessoa} />
        <Stack.Screen name="BuscarFruta" component={BuscarFruta} />
        <Stack.Screen name="BuscarCor" component={BuscarCor} />
        <Stack.Screen name="BuscarCarro" component={BuscarCarro} />
        <Stack.Screen name="BuscarAnimal" component={BuscarAnimal} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
