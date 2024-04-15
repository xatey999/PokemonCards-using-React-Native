import {StyleSheet, SafeAreaView} from "react-native";
import PokemonCard from "./Components/PokemonCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      paddingTop: 25,
      backgroundColor: '#efb3ff',
    },
  }
);
