import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import CreateNavigation from './navigation/CreateNavigation';

export default function App() {
 
  return (
    <View style={styles.container}>
          <CreateNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
    
  },
});
