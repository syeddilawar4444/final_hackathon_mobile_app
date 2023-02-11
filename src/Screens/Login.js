import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View, TextInput,ActivityIndicator,Alert } from "react-native";
// import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-check-box'
// import Background from "./Background";
import InputField from "../Componets/InputField";
import Btn from "../Componets/Btn";
import BaseUrl from "../constant/BaseUrl";
import axios from "axios";


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const [respon ,setRespon] = useState("")

  const passwordInputRef = useRef();

  const loginUser = async() => {
    if (!email || !password) {
      return alert("Please fill the Form");
    }
    try {
      const resp = await axios.post(`${BaseUrl}/user/login`, {
            email: email,
            password: password,
      });
      console.log("res==>",resp.data.message);
      setRespon(resp.data.message)

      setLoading(false)
      Alert.alert(
        "Login",
        "Successfully Login",
        [{
          text:"OK",
          onPress:()=>{props.navigation.navigate("Home")}
        }]
      )
      setPassword("")
      setEmail("")
      
    //  const msg =   alert("registered")
    //  await msg
      // props.navigation.navigate("Login")
      // fetch(`${baseUrl}/user/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     fullName: username,
    //     phoneNumber: contact,
    //     email: email,
    //     password: password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  } catch (error) {
    // alert('error',error);
    console.log("error1",error)
    setLoading(false)
    alert('faild')
  }




  };

  //    const change = (e)=>{
  // console.log("E",e)
  //    }
  return (
    <>
      <View style={{ backgroundColor: "#000C40" }}>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 50,
            fontWeight: "bold",
            marginVertical: 30,
          }}
        >
          Login
        </Text>
        {/* form container */}
        <View
          style={{
            height: 700,
            backgroundColor: "white",
            borderTopLeftRadius: 200,
            paddingTop: 100,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 40, color: "#054516" }}>Welcome Back</Text>
          <Text>Login To Your Account</Text>
          <TextInput
            placeholder="Email..."
            autoFocus
            returnKeyType="next"
            onChangeText={(e) => setEmail(e)}
            onSubmitEditing={()=>{
                passwordInputRef.current.focus()
            }}
            value={email}
            keyboardType={"email-address"}
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 100,
              color: "#054516",
              paddingHorizontal: 10,
              width: "77%",
              paddingVertical: 10,
              marginTop: 14,
              fontSize: 16,
              
            }}
          />
          <TextInput
            placeholder="Password..."
             ref={passwordInputRef}
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
            onSubmitEditing={
                loginUser
                
            }
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 100,
              color: "#054516",
              paddingHorizontal: 10,
              width: "77%",
              paddingVertical: 10,
              marginTop: 14,
              fontSize: 16,
            }}
          />

          {/* <InputField vaue={username} placeholder="Email..." keyboardType={"email-address"}  />       
                        <InputField placeholder="Password..." secureTextEntry={true}  />    */}

          {/* fotgetpassword */}
          <View style={{ alignItems: "flex-end", width: "77%" }}>
            <Text style={{ color: "#054516", fontSize: 16, marginTop: 13 }}>
              Forgot Password ?
            </Text>
          </View>
          {/* loginButton */}

          {loading ?  <ActivityIndicator style={{alignSelf:"center",marginTop:7}} size={"large"}  color="#0000ff"/> :
          <Btn
            bgColor="green"
            textColor="white"
            btnLable="Login"
            press={loginUser}
          />}
          {/* Don't have an account */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "center",
            }}
          >
            <Text>Don't hava an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: "#054516", fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
// const styles = StyleSheet.create({

// })

export default Login;
