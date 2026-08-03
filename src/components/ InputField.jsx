import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({ secureTextEntry,placeholder, keyboardType, onChangeText, value, errors }) {

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
                secureTextEntry={secureTextEntry}
            />
            {errors && (
                <Text style={styles.errorMessage}>
                    {errors}
                </Text>
            )}
        </View>
    )

};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 10
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginBottom: 10
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start'
    }
})