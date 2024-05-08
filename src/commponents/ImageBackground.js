import { StyleSheet, Text, View,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign'
import { colors } from '../utils/colors'

export default function ImageBackGround(props) {
     const {
    styleBackground, 
    text, 
    styleText, 
    styleTouch, 
    OnPress, 
  } =props
  return (
  <ImageBackground source={require('../assets/img/SignUp.png')} style={styleBackground}>
    <TouchableOpacity style={styleTouch} onPress={OnPress}>
<Icon name='left'  color={colors.white} size={17}/>
    </TouchableOpacity>
<Text style={styleText}>{text}</Text>
  </ImageBackground>
  )
}

