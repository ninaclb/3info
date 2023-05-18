import { View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Bem vindo ao sistema de navegação</Text>
      <Button onPress={() => navigation.navigate("BuscarProduto")}>Buscar Produto</Button>
      <Button onPress={() => navigation.navigate("BuscarPessoa")}>Buscar Usuário</Button>
      <Button onPress={() => navigation.navigate("BuscarFruta")}>Buscar Fruta</Button>
      <Button onPress={() => navigation.navigate("BuscarCor")}>Buscar Cor</Button>
      <Button onPress={() => navigation.navigate("BuscarCarro")}>Buscar Carro</Button>
      <Button onPress={() => navigation.navigate("BuscarAnimal")}>Buscar Animal</Button>
    </View>
  );
}