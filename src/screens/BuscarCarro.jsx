import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";
import { styles } from "../utils/styles";

export default function BuscarCarro({ navigation }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function BuscarCarro() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "carro"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const BuscarCarro = query(produtoRef, where("NomeCarro", "==", busca)); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(BuscarCarro); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaCarro = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaCarro); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaCarro); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      BuscarCarro();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busque seu carro aqui:</Text>
      <TextInput
        style={styles.input}
        label="Nome do carro"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Nome do carro: <Text>{item.NomeCarro}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Cor do carro: <Text>{item.CorCarro}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Placa do carro: <Text>{item.PlacaCarro}</Text>
          </Text>
        )}
      />
    </View>
  );
}
