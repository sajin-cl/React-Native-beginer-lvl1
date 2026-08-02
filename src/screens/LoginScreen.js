import { View, Text, TextInput } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20
      }}
    >
      <Text
      style={{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20
      }}
      >Welcome Back</Text>

      <TextInput
      placeholder="Enter your Email..."
      style={{
        borderWidth:1,
        borderColor:'blue',
        padding:15,
        borderRadius:12
      }}
      />
    </View>
  );
}