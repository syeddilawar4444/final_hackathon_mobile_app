import React from 'react'
import {ImageBackground ,View,SafeAreaView,Platform,StatusBar,StyleSheet}  from "react-native"
import BackImg from "../assets/Background.jpg"
function Background({children}) {
  return (
    // <ImageBackground source={BackImg} style={styles.container}>
    <View style={{backgroundColor:"red",display:"flex",alignItems:"stretch",}}>
    {children}
    </View>
    // </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{

    height:"100%" , width:"100%",display:"flex",flexDirection:"row",alignItems:"stretch",
  
  
  
  }
  }
)

export default Background
