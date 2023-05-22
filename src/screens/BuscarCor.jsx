import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";
import { styles } from "../utils/styles";

export default function BuscarCor({ navigation }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function BuscarCor() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "cor"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const BuscarCor = query(produtoRef, where("NomeCor", "==", busca)); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(BuscarCor); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaCor = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaCor); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaCor); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      BuscarCor();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busque sua cor aqui:</Text>
      <TextInput
        style={styles.input}
        label="Nome da cor"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Nome da cor: <Text>{item.NomeCor}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            RGB da cor: <Text>{item.RGBCor}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Tom da cor: <Text>{item.TomCor}</Text>
          </Text>
        )}
      />
    </View>
  );
}
