import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function name() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>dinamic route</Text>
      <Text>{params.name}</Text>
    </View>
  );
}
