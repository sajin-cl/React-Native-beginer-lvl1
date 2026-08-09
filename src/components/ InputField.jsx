import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";



export default function InputField({
    placeholder,
    keyboardType = "default",
    value,
    onChangeText,
    error,
    isPassword = false,
}) {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordHidden((prev) => !prev);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.inputBox}
                keyboardType={keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword && isPasswordHidden}
            />

            {isPassword && (
                <Pressable onPress={togglePasswordVisibility}>
                    <Text>
                        {isPasswordHidden
                            ? "Show Password"
                            : "Hide Password"}
                    </Text>
                </Pressable>
            )}

            {error && (
                <Text style={styles.errorMessage}>
                    {error}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 10,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 15,
        borderRadius: 12,
        width: "100%",
        marginBottom: 10,
    },

    errorMessage: {
        color: "red",
        marginTop: 5,
        alignSelf: "flex-start",
    },
});