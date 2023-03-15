import React from 'react'
import {ImageBackground ,View,SafeAreaView,Text,Platform,StatusBar}  from "react-native"

function Home(props) {

  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const das = ()=>{
    const token = localStorage.getItem("token")
    if(token){
      console.log(parseJwt(token))
      alert("token")
    }else{
      alert("token not exit")
    }
  }



  return (
  //  <Text> dilawar</Text>
      <View style={{marginHorizontal:30,width:"100%",backgroundColor:"green" } } >

      <Text style={{ fontSize : 26}}>Home page</Text>
      <Text  style={{fontSize : 26}}  onPress={()=>{das()}} >Project</Text>

      </View>
  )
}
// const styles = StyleSheet.create({

// })


export default Home