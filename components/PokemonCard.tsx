import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/").at(-2);
  const pokemonImagenURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  //split(), filter(), at()

  //split(): divide un string en arrays, basado en un caracter
  //filter(): crea un nuveo arreglo con elementos, segun una condicion
  //at(): funciona para strings y arrays, usa indices negativos para buscar algo
  return (
    <Pressable
      onPress={() => router.push(`/pokemon/${props.name}`)}
      style={{
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
      }}
    >
      <Image
        onProgress={() => console.log(props.name)}
        source={{ uri: pokemonImagenURL }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}
