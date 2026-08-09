import { View, Text, Pressable, StyleSheet, FlatList, } from "react-native";

const products = [
    {
        id: "1",
        name: "Nike Shoes",
        price: 2999,
    },
    {
        id: "2",
        name: "Adidas Shoes",
        price: 3499,
    },
    {
        id: "3",
        name: "Puma Shoes",
        price: 2499,
    },
    {
        id: "4",
        name: "shoe4",
        price: 2499,
    },
    {
        id: "5",
        name: "shoe5",
        price: 2499,
    },
    {
        id: "6",
        name: "shoe6",
        price: 2499,
    },
    {
        id: "7",
        name: "shoe7",
        price: 2499,
    },
    {
        id: "8",
        name: "shoe9",
        price: 2499,
    },
    {
        id: "9",
        name: "shoe9",
        price: 2499,
    },
];

export default function HomeScreen({ navigation }) {

    const handleLogout = () => {
        navigation.replace("Login");
    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome Home
            </Text>

            <FlatList
                data={products}
                keyExtractor={(product) => product.id}
                showsVerticalScrollIndicator={false}
                //renderItem={renderProduct}
                renderItem={({ item: product }) => (
                    <Pressable
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate('ProductDetails', {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                            })
                        }}
                    >
                        <Text style={styles.productName}>
                            {product.name}
                        </Text>

                        <Text style={styles.productPrice}>
                            ₹{product.price}
                        </Text>
                    </Pressable>
                )}
            />

            <Pressable
                style={styles.button}
                onPress={handleLogout}
            >
                <Text style={styles.buttonText}>
                    Logout
                </Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },

    card: {
        padding: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 10,
    },

    productName: {
        fontSize: 18,
        fontWeight: "bold",
    },

    productPrice: {
        fontSize: 16,
        marginTop: 5,
    },

    button: {
        backgroundColor: "black",
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 15,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
});