import { StyleSheet, Text, View,StatusBar } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context'
import Background from './src/Componets/Background';
import Navigation from './src/Config/Navigation';


export default function App() {
  return (
    // <View style={styles.container}>
<View style={styles.container}>
    <Navigation />
</View>
    // </View>
    // <SafeAreaView >
    // <Background />

    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
    
    // display:"flex",
    // alignItems:"stretch"
    
  },
});
