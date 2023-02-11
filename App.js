import { StyleSheet, Text, View,StatusBar,useColorScheme } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Background from './src/Componets/Background';
import Navigation from './src/Config/Navigation';
import {Colors} from "react-native/Libraries/NewAppScreen"


export default function App() {
  const isDarkMode = useColorScheme() === "dark"
  const backgroundStyle = {
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter
  } 

  return (
    // <View style={styles.container}>
 <View style={styles.container}>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
    // marginTop:StatusBar.currentHeight
    
    // display:"flex",
    // alignItems:"stretch"
    
  },
});
