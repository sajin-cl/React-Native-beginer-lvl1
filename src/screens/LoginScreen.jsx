import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";



export default function LoginScreen({ navigation }) {


    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const [isLoading, setIsLoading] = useState(false);


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


        if (newErrors.email || newErrors.password) {
            console.log("Login failed");
            return;
        }



        // Validation successful --> Navigate to the Home page
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigation.replace("Home");
        }, 2000);


    }



    return (
        <View
            style={styles.container}
        >
            <Text style={styles.greetingText}>
                Welcome Back
            </Text>


            <InputField
                placeholder={'Enter your email'}
                keyboardType={'email-address'}
                onChangeText={handleEmailChange}
                value={email}
                error={errors.email}
            />

            <InputField
                placeholder={"Enter your password"}
                keyboardType={'password'}
                onChangeText={handlePasswordChange}
                value={password}
                error={errors.password}
                isPassword

            />

            <PrimaryBtn onPress={handleLogin} text={isLoading ? 'Logging in..' : 'Login'} disabled={isLoading} />
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
    }
})
