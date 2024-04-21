import { View, Text, StyleSheet, Image } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡"};

        case "water":
            return { borderColor: "#6493EA", emoji:"💧"};

        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };

        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };

        default:
            return{ borderColor: "#A0A0A0", emoji: "❓" };
    }
};

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    weakness
}) {

    const { borderColor, emoji } = getTypeDetails(type);

    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤️{hp}</Text>
            </View>

        <Image source={image} style={styles.image}
        resizeMode="contain" />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText}>{type}</Text>
            </View>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness: {weakness.join(", ")}</Text>
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

    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius:20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize: 31,
        marginRight: 12,

    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },


    weaknessContainer: {
        marginBottom: 8,
    },

    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },

    image: {
        height: 200,
        width: "100%",
        marginBottom: 15,
    },
})