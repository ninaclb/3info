import { View } from "react-native";

export default function HomeScreen() {
  const [produtos, setProdutos] = useState([]);
  async function queryProdutos(nomeProduto = null) {
    try {
      const produtosRef = collrtion(db, "produtos");
      const queryProdutos = query(
        produtosRef,
        where("NomeDoProduto", "==", "saia")
      );
      const querySnapshot = await getDocs(query);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}
