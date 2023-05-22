import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";





export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Bem vindo ao sistema de navegação</Text>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarProduto")}>Buscar Produto</Button>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarPessoa")}>Buscar Usuário</Button>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarFruta")}>Buscar Fruta</Button>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarCor")}>Buscar Cor</Button>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarCarro")}>Buscar Carro</Button>
      <Button style={styles.botao} onPress={() => navigation.navigate("BuscarAnimal")}>Buscar Animal</Button>
    </View>
  );
}