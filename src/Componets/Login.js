import React,{useState} from 'react'
import { Text, TouchableOpacity, View,TextInput } from "react-native"
// import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-check-box'
import Background from './Background'
import InputField from './InputField'
import Btn from "./Btn"

function Login(props) {
    const [username,setUsername] = useState("dilawar")
    const [email,setEmail] = useState("")
    const [contact,setContact] = useState("")
    const [password,setPassword] = useState("")
    const [cPassword,setConPassword] = useState("")

   const loginUser = ()=>{
    if(!email || !password){
       return alert("fill the Form")
    }
    console.log("email",email)
    console.log("password",password)


   }

//    const change = (e)=>{
// console.log("E",e)
//    }
    return (
        <>

                <View style={{ alignItems: 'center' , width:360,backgroundColor:"red"}} >
                    <Text style={{ color:"white",fontSize:50,fontWeight:"bold",marginVertical:30 }}>Login</Text>
                         {/* form container */}
                    <View style={{height:700, width:360, backgroundColor:"white", borderTopLeftRadius:200,paddingTop:100,alignItems:"center"   }} >
                        <Text style={{fontSize:40,color:"#054516"}}>Welcome Back</Text>
                        <Text>Login To Your Account</Text>
                        <TextInput placeholder="Email..." onChangeText={(e)=>setEmail(e)} value={email} keyboardType={"email-address"} style={{backgroundColor:"#e0e0e0",borderRadius:100,color :"#054516",paddingHorizontal:10, width:"77%",paddingVertical:10,marginTop:14,fontSize:16 }}  />
                        <TextInput placeholder="Password..." value={password} onChangeText={(e)=>setPassword(e)} secureTextEntry={true} style={{backgroundColor:"#e0e0e0",borderRadius:100,color :"#054516",paddingHorizontal:10, width:"77%",paddingVertical:10,marginTop:14,fontSize:16 }}  />

                        {/* <InputField vaue={username} placeholder="Email..." keyboardType={"email-address"}  />       
                        <InputField placeholder="Password..." secureTextEntry={true}  />    */}

                        {/* fotgetpassword */}
                            <View style={{alignItems:"flex-end",width:"77%"    }}>
                                <Text style={{color:"#054516", fontSize:16,marginTop:13}} >Forgot Password ?</Text>
                            </View>
                            {/* loginButton */}
                         <Btn  bgColor="green" textColor="white" btnLable="Login" press={loginUser} />
                         {/* Don't have an account */}
                        <View style={{display:"flex" ,flexDirection:"row", marginVertical:15, justifyContent:"center" }}>
                            <Text>Don't hava an account ? </Text>
                            <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
                                <Text style={{color: "#054516",fontSize:16}}>
                                    Signup
                                </Text>

                            </TouchableOpacity>

                        </View>
                
                
                
                    </View>

                

                    

            </View>
       
        </>
        )
} 
// const styles = StyleSheet.create({

// })


export default Login
