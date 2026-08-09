import { View, Text, StyleSheet } from "react-native";

export default function ProductDetailsScreen({ route }) {

    const { id, name, price } = route.params;

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Product Details
            </Text>

            <Text>Product ID: {id}</Text>

            <Text>Product Name: {name}</Text>

            <Text>Price: ₹{price}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
    },
});