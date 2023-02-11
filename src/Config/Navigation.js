// In Navigation.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import components
import MainPage from "../Screens/MainPage"
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen  name="MainPage" component={MainPage} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen  name="Home" component={Home} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;