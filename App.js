import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MY PROFILE</Text>
      <Text style={styles.title}>Sajin.C.L</Text>
      <Text style={styles.jobRole}>MERN STACK DEVELOPER</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  heading:{
    color:"blue",
  },
  jobRole:{
    color:'gray',
    justifyContent:'center'
  }
});
