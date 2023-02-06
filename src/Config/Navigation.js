// In Navigation.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import components
import Home from "../Componets/Home"
import Login from '../Componets/Login';
import Signup from '../Componets/Signup';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Signup" component={Signup} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;