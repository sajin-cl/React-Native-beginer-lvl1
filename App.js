import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ flex: 4, backgroundColor: "#f5f5f5" }} />

      <View style={{ flex: 1, backgroundColor: "#ffffff" }} />

      <View style={{ flex: 3, backgroundColor: "#eeeeee" }} />

      <View style={{ flex: 1, backgroundColor: "#ffffff" }} />

      <View style={{ flex: 1, backgroundColor: "#dddddd" }} />
    </View>
  );
}