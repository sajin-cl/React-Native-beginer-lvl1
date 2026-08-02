import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LoginScreen() {
    return (
        <View
            style={styles?.container}
        >
            <Text
                style={styles?.greetingText}
            >Welcome Back</Text>

            <TextInput
                placeholder="Enter your email"
                style={styles?.emailField}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    greetingText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    emailField: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 12,
        width: '100%'
    }

});