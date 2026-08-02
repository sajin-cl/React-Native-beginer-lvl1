import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LoginScreen() {

    const [isPasswordHidden, setIsPasswordHidden] = useState(false);

    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.greetingText}
            >Welcome Back</Text>

            <TextInput
                placeholder="Enter your email"
                style={styles.inputBox}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                placeholder="password"
                secureTextEntry={!isPasswordHidden}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.inputBox}
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
    inputBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginBottom: 20
    }

});