import React, { useState } from 'react'
import { Text, TouchableOpacity, View,TextInput,StatusBar } from "react-native"
// import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-check-box'
import Background from './Background'
import InputField from './InputField'
import Btn from "./Btn"

function Signup(props) {

  const [username,setUsername] = useState("dilawar")
  const [email,setEmail] = useState("")
  const [contact,setContact] = useState("")
  const [password,setPassword] = useState("")
  const [cPassword,setConPassword] = useState("")

  const signUpUser = () => {
    if(!email || !username || !contact || !password || !cPassword){
      alert("fill form ")

    }else{


    }
  }
  return (
    <>
         <View style={{display: "flex", justifyContent:"space-between",backgroundColor:"#000C40" }} >
          <View style={{alignItems:"center",marginVertical:20}}>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", marginVertical: 10 }}>Register</Text>
          <Text style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
            Create New Account
          </Text>
          </View>

          {/* form container */}
          <View style={{ backgroundColor: "white", 
          borderTopLeftRadius: 200, paddingTop: 100, alignItems: "center"
          ,height:"100%"
        }} >

            <Text>Signup To Your Account</Text>
            <TextInput value={username} onChangeText={(e)=>setUsername(e)} placeholder="UserName..."   style={{ backgroundColor: "#e0e0e0", borderRadius: 100, color: "#054516", paddingHorizontal: 10, width: "77%", paddingVertical: 10, marginTop: 14, fontSize: 16 }} />
            <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email..."  keyboardType={"email-address"} style={{ backgroundColor: "#e0e0e0", borderRadius: 100, color: "#054516", paddingHorizontal: 10, width: "77%", paddingVertical: 10, marginTop: 14, fontSize: 16 }} />
            <TextInput value={contact} onChangeText={(e)=>setContact(e)}  placeholder="Contact No..." keyboardType={"numeric"} style={{ backgroundColor: "#e0e0e0", borderRadius: 100, color: "#054516", paddingHorizontal: 10, width: "77%", paddingVertical: 10, marginTop: 14, fontSize: 16 }} />
            <TextInput value={password} onChangeText={(e)=>setPassword(e)} placeholder="Password..." secureTextEntry={true}  style={{ backgroundColor: "#e0e0e0", borderRadius: 100, color: "#054516", paddingHorizontal: 10, width: "77%", paddingVertical: 10, marginTop: 14, fontSize: 16 }} />
            <TextInput value={cPassword} onChangeText={(e)=>setConPassword(e)} placeholder="Confirm Password..." secureTextEntry={true}  style={{ backgroundColor: "#e0e0e0", borderRadius: 100, color: "#054516", paddingHorizontal: 10, width: "77%", paddingVertical: 10, marginTop: 14, fontSize: 16 }} />

          

            {/* fotgetpassword */}
            {/* <View style={{alignItems:"flex-end",width:"77%"    }}>
                                <Text style={{color:"#054516", fontSize:16,marginTop:13}} >Forgot Password ?</Text>
                              </View> */}
            {/* loginButton */}
            <Btn bgColor="green" textColor="white" btnLable="SignUp" press={signUpUser} />
            {/* Don't have an account */}
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 15, justifyContent: "center" }}>
              <Text>Already hava an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text style={{ color: "#054516", fontSize: 16 }}>
                  Login
                </Text>
             </TouchableOpacity>

            </View>

          </View>

        </View>
    </>
  )
}
export default Signup