import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { collection, query, where, getDocs } from "firebase/firestore";
import { View } from "react-native";
import { db } from "../config/firebase";
import { FlatList } from "react-native-web";

export default function HomeScreen() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);

  async function buscarProduto() {
    // vai fazer a pergunta ao banco do euseEste PASSO 2
    const produtoRef = collection(db, "produto"); // se usa o Ref no produto é como se ele tivesse dando select no campo do banco de dados
    const buscarProduto = query(
      produtoRef,
      where("NomeDoProduto", "==", busca)
    ); // vai fazer a pergunta ao banco do euseEste PASSO 3 query é uma busca
    const resultadoSnapshot = await getDocs(buscarProduto); // quando a busca é executada no banco "botao de resposta" PASSO 4

    const listaProduto = resultadoSnapshot.docs.map((doc) => doc.data()); // vai pegar o resultado da busca e vai transformar em um array PASSO 6
    console.log(listaProduto); // vai mostrar o resultado da busca no console PASSO 7
    setResultado(listaProduto); // vai mostrar o resultado da busca no console PASSO 8

    //console.log(resultadoSnapshot)// vai mostrar o resultado da busca no console PASSO 5
  }
  useEffect(
    //1
    () => {
      buscarProduto();
    },
    [busca] // ele vai escutar a variavel
  );

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput
        label="Nome do Produto"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList 
      data={resultado}
        renderItem={({item}) => <Text>{item.NomeDoProduto}</Text>}
      />
    </View>
  );
}
