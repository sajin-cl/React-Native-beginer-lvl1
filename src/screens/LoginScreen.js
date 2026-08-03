import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function LoginScreen() {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const togglePasswordVisiblity = () => {
        setIsPasswordHidden(prev => !prev)
    };


    const handleLogin = () => {
        console.log("Login Successfully");
        console.log({email,password});
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.greetingText}>
                Welcome Back
            </Text>

            <TextInput
                placeholder="Enter your email"
                style={styles.inputBox}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Enter your password"
                secureTextEntry={isPasswordHidden}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.inputBox}
                value={password}
                onChangeText={setPassword}
            />
            <Pressable onPress={togglePasswordVisiblity} >
                <Text>
                    {isPasswordHidden ? "Show Password" : "Hide Password"}
                </Text>
            </Pressable>

            <Pressable
                onPress={handleLogin}
                style={({ pressed }) => [styles.loginBtn, { backgroundColor: pressed ? '#1D4ED8' : '#2563EB' }]}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
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
    },
    loginBtn: {
        marginTop: 10,
        paddingVertical: 15,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    }

});