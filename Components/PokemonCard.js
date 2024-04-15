import { View, Text, StyleSheet, Image } from "react-native";

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    weakness
}) {
    return(
        <View style={styles.card}>
            <View>
            <Text>Name: {name}</Text>
            <Text>HP: {hp}</Text>
            </View>

        {/* <Image source={image} /> */}

            <View>
                <Text>Type: {type}</Text>
            </View>

            <View>
                <Text>Weakness: {weakness.join(", ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
    }
})