import React from 'react'
import {ImageBackground ,View,SafeAreaView,Text,Platform,StatusBar}  from "react-native"
// import BackImg from "../assets/Background.jpg"
import Background from '../Componets/Background'
import Btn from "../Componets/Btn"


function MainPage(props) {

const login = ()=>{
  console.log("click")
}

  return (
  //  <Text> dilawar</Text>

    // <Background>
    <>
      <View style={{marginHorizontal:30,width:"100%" } } >

      <Text style={{marginTop: 50, fontSize : 26}}>DILAWAR Hussain</Text>
      <Text  style={{marginTop: 10, fontSize : 26}}>Project</Text>
      </View>
      <View style={{alignItems:"center"}}>

      <Btn bgColor="gray" textColor="white" btnLable="Login" press={()=>props.navigation.navigate("Login")} />
      <Btn bgColor="green" textColor="white" btnLable="SignUp" press={()=>props.navigation.navigate("Signup")} />
      </View>

    </>
    // </Background>
  )
}
// const styles = StyleSheet.create({
// })
export default MainPage