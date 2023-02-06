import React from 'react'
import {ImageBackground ,View,SafeAreaView,Text,Platform,StatusBar}  from "react-native"
// import BackImg from "../assets/Background.jpg"
import Background from './Background'
import Btn from "../Componets/Btn"


function Home(props) {

const login = ()=>{
  console.log("click")
}

  return (
  //  <Text> dilawar</Text>
    <Background>
      <View style={{marginHorizontal:30,width:"100%" } } >

      <Text style={{color:"white",marginTop: 50, fontSize : 26}}>DILAWAR Hussain</Text>
      <Text  style={{color:"white",marginTop: 10, fontSize : 26}}>Project</Text>
      </View>
      <Btn bgColor="gray" textColor="white" btnLable="Login" press={()=>props.navigation.navigate("Login")} />
      <Btn bgColor="green" textColor="white" btnLable="SignUp" press={()=>props.navigation.navigate("Signup")} />

    </Background>
  )
}
// const styles = StyleSheet.create({

// })


export default Home
