import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    //contenido
    console.log("Entre en pantalla y mori");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const res = await fetch(URL, {
      method: "GET",
    });
    console.log(res);
  };

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
