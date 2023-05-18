import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";

export default function BuscarPessoa({ navigation }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function BuscarPessoa() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "pessoa"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const BuscarPessoa = query(
      produtoRef,
      where("NomePessoa", "==", busca)
    ); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(BuscarPessoa); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaPessoa = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaPessoa); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaPessoa); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      BuscarPessoa();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput
        label="Nome da Pessoa"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Nome da pessoa: <Text>{item.NomePessoa}</Text></Text>
      }
      />
      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Idade da pessoa: <Text>{item.IdadePessoa}</Text></Text>
      }
      />
      <FlatList 
      data={resultado}
        renderItem={({item}) =>
        <Text>Apelido da pessoa: <Text>{item.ApelidoPessoa}</Text></Text>
      }
      />
    </View>
  );
}
