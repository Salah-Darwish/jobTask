import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './stack'
export default function Navigation() {
  return (
   <NavigationContainer>
    <Stack/>
   </NavigationContainer>
  )
}

