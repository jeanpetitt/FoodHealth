import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Start() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '563px',
    height: '943px',
    backgroundColor: 'linear-gradient(191.65deg, rgba(15, 86, 224, 0.66) 8.54%, #A0BCF3 99.15%)'
  },
});
