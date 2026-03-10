import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";
import PokemonCard from "../components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    //contenido
    console.log("Entre en pantalla y mori");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    setResults(data.results);
    console.log(data);
  };

  return (
    <ScrollView>
      <Button title="Pokemon" onPress={() => router.push("/pokemon")}></Button>
      <Button
        title="New Screen"
        onPress={() => router.push("/newScreen")}
      ></Button>
      <Button
        title="dinamic route"
        onPress={() => router.push("/pokemon/jorge")}
      ></Button>
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </ScrollView>
  );
}
