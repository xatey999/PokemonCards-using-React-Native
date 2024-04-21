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
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>💖{hp}</Text>
            </View>

        <Image source={image} style={styles.image}
        resizeMode="contain" />

            <View>
                <Text style={styles.type}>Type: {type}</Text>
            </View>

            <View>
                <Text style={styles.weakness}>Weakness: {weakness.join(", ")}</Text>
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
    },

    nameContainer : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },

    name: {
        fontSize: 30,
        fontWeight: "bold"
    },

    hp: {
        fontSize: 25,
        color: "red",
    },

    type: {
        fontSize: 22,
        fontWeight: "500",
    },

    weakness: {
        fontSize: 20,
        fontWeight: "400",
    },

    image: {
        height: 200,
        width: "100%",
        marginBottom: 15,
    }
})