import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome Home 
      </Text>

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
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

});