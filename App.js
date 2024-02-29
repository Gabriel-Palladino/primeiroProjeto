import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gabriel Palladino</Text>
      <br></br>
      <Text>Desenvolvimento de Dispositivo Móveis</Text>
      <br></br>
      <Text>22/02/2024</Text>
      <br></br>
      <Text>Danilo Lindo</Text>
      <br></br>
      <Text>29/02/2024</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
