import React, { useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-check-box'

//import components
import Background from "./Background";
import InputField from "./InputField";
import Btn from "./Btn";

function Signup(props) {
  const navigator = useNavigation();

  const emailInputRef = useRef("");
  const contactInputRef = useRef("");
  const passwordInputRef = useRef("");
  const cpasswordInputRef = useRef("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConPassword] = useState("");

  const baseUrl = "http://192.168.4.100:4000";

  const signUpUser = async ({navigation}) => {
    if (!email || !username || !contact || !password || !cPassword) {
      return alert("fill form ");
    }
    try {
        const resp = await axios.post(`${baseUrl}/user/register`, {
              fullName: username,
              phoneNumber: contact,
              email: email,
              password: password,
        });
        console.log("res==>",resp.data);
        alert("registered")
        // navigation.navigate("Login")
        navigation.navigate('Login')
    
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
      alert('faild')
    }
  };
  return (
    <>
      <KeyboardAvoidingView>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#000C40",
          }}
        >
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Text
              style={{
                color: "white",
                fontSize: 50,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Register
            </Text>
            <Text style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
              Create New Account
            </Text>
          </View>

          {/* form container */}
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 200,
              paddingTop: 100,
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text>Signup To Your Account</Text>
            <TextInput
              autoFocus
              onSubmitEditing={() => {
                emailInputRef.current.focus();
              }}
              blurOnSubmit={false}
              returnKeyType="next"
              value={username}
              enterKeyHint={"next"}
              onChangeText={(e) => setUsername(e)}
              placeholder="UserName..."
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
              value={email}
              ref={emailInputRef}
              onSubmitEditing={() => {
                contactInputRef.current.focus();
              }}
              returnKeyType="next"
              onChangeText={(e) => setEmail(e)}
              placeholder="enteremail@gmail.com"
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
              ref={contactInputRef}
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
              returnKeyType="next"
              value={contact}
              maxLength={11}
              onChangeText={(e) => setContact(e)}
              placeholder="03xxxxxxxx"
              keyboardType={"numeric"}
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
              ref={passwordInputRef}
              value={password}
              onSubmitEditing={() => {
                cpasswordInputRef.current.focus();
              }}
              returnKeyType="next"
              onChangeText={(e) => setPassword(e)}
              placeholder="Password..."
              secureTextEntry={true}
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
              ref={cpasswordInputRef}
              onSubmitEditing={() => signUpUser()}
              value={cPassword}
              onChangeText={(e) => setConPassword(e)}
              placeholder="Confirm Password..."
              secureTextEntry={true}
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

            {/* fotgetpassword */}
            {/* <View style={{alignItems:"flex-end",width:"77%"    }}>
                                <Text style={{color:"#054516", fontSize:16,marginTop:13}} >Forgot Password ?</Text>
                              </View> */}
            {/* loginButton */}
            <Btn
              bgColor="green"
              textColor="white"
              btnLable="SignUp"
              press={signUpUser}
            />
            {/* Don't have an account */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 15,
                justifyContent: "center",
              }}
            >
              <Text>Already hava an account ? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#054516", fontSize: 16 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
export default Signup;
