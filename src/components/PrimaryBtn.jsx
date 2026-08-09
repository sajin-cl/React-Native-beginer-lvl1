import { Pressable, StyleSheet, Text } from "react-native";


export default function PrimaryBtn({handleLogin,text}) {


    return (

        <Pressable
            onPress={handleLogin}
            style={({ pressed }) => [styles.primaryBtn, { backgroundColor: pressed ? '#1D4ED8' : '#2563EB' }]}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
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
    },
})