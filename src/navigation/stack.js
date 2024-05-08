import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../screens/SignUp/SignUp';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home';
export default function Stack() {
    const Stack=createNativeStackNavigator(); 
  return (
   
   <Stack.Navigator>
    <Stack.Screen
    name='SignIn'
    component={SignIn}
    options={{headerShown:false}}
    />
   <Stack.Screen
    name='SignUp'
    component={SignUp}
    options={{headerShown:false}}
    />
       <Stack.Screen
    name='Home'
    component={Home}
    options={{headerShown:false}}
    />
   </Stack.Navigator>
  )
}