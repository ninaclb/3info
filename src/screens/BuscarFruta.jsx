import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";
import { styles } from "../utils/styles";

export default function BuscarFruta({ navigation }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function BuscarFruta() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "fruta"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const BuscarFruta = query(
      produtoRef,
      where("NomeFruta", "==", busca)
    ); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(BuscarFruta); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaFruta = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaFruta); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaFruta); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      BuscarFruta();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busque sua fruta aqui:</Text>
      <TextInput
        style={styles.input}
        label="Nome da Fruta"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Nome da fruta: <Text>{item.NomeFruta}</Text></Text>
      }
      />
      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Cor da fruta: <Text>{item.CorFruta}</Text></Text>
      }
      />
      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Preço da fruta: <Text>{item.PrecoFruta}</Text></Text>
      }
      />
    </View>
  );
}
