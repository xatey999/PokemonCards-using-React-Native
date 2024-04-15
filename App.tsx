import {StyleSheet, SafeAreaView} from "react-native";
import PokemonCard from "./Components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image : require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    weakness: ['Water', 'Rock'],
  };


  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData}/>
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
