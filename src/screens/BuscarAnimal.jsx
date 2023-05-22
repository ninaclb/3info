import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";
import { styles } from "../utils/styles";

export default function BuscarAnimal({ navigation }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function BuscarAnimal() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "animal"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const BuscarAnimal = query(produtoRef, where("NomeAnimal", "==", busca)); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(BuscarAnimal); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaAnimal = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaAnimal); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaAnimal); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      BuscarAnimal();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busque seu animal aqui:</Text>
      <TextInput
        style={styles.input}
        label="Nome do animal"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Nome do animal: <Text>{item.NomeAnimal}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Especie do animal: <Text>{item.EspecieAnimal}</Text>
          </Text>
        )}
      />
      <FlatList
        data={resultado}
        renderItem={({ item }) => (
          <Text>
            Quantidade de patas do animal: <Text>{item.PatasAnimal}</Text>
          </Text>
        )}
      />
    </View>
  );
}
