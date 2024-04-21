import {StyleSheet, SafeAreaView, ScrollView} from "react-native";
import PokemonCard from "./Components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image : require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    weakness: ['Water', 'Rock'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image : require('./assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    weakness: ['Ground'],
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    image : require('./assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    weakness: ['Fire', 'Ice', 'Air', 'Psychic'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image : require('./assets/squirtle.png'),
    type: 'Water',
    hp: 44,
    weakness: ['Electric', 'Grass'],
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...bulbasaurData}/>
      <PokemonCard {...squirtleData}/>
      </ScrollView>
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
