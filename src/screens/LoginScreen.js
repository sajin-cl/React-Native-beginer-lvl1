import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function LoginScreen() {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const togglePasswordVisiblity = () => {
        setIsPasswordHidden(prev => !prev)
    };

    //for email
    const handleEmailChange = (text) => {
        setEmail(text);

        setErrors(prev => ({
            ...prev,
            email: ""
        }));
    };

    //for password
    const handlePasswordChange = (text) => {
        setPassword(text);

        setErrors(prev => ({
            ...prev,
            password: ""
        }));
    };


    const handleLogin = () => {

        const newErrors = {
            email: '', password: ''
        }

        //Email validation
        if (!email.trim()) {
            newErrors.email = 'email is required'
        }
        else if (!email.includes('@')) {
            newErrors.email = 'email is not valid'
        }

        //Password validation
        if (!password.trim()) {
            newErrors.password = "Password is required";
        }
        else if (password.length < 8) {
            newErrors.password = 'Password should be at least 8 characters long'
        }

        setErrors(newErrors);

        console.log("Login failed");

        if (newErrors.email || newErrors.password) {
            return;
        }

        console.log("Login Successfully");
        console.log({ email, password });

    }



    return (
        <View
            style={styles.container}
        >
            <Text style={styles.greetingText}>
                Welcome Back
            </Text>


            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your email"
                    style={styles.inputBox}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={handleEmailChange}
                />
                {errors.email && (
                    <Text style={styles.errorMessage}>
                        {errors.email}
                    </Text>
                )}
            </View>


            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={isPasswordHidden}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.inputBox}
                    value={password}
                    onChangeText={handlePasswordChange}
                />
                {errors.password && (
                    <Text style={styles.errorMessage} >
                        {errors.password}
                    </Text>
                )}

            </View>


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

    )
};

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
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start'
    }

})
