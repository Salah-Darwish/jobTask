import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomText from './CustomText'

export default function CustomButton(props) {
    const{
styleTouchContainer, 
OnPress, 
isIcon, 
isImage,
src, 
styleImage, 
isText, 
styleText,
text,
name
    }=props
  return (
    <TouchableOpacity style={styleTouchContainer}
    onPress={OnPress}
    >
{isIcon ? <Icon name={name} size={20}/>:null}
{isText?<CustomText styleTextCustom={styleText}text={text} />:null}
{isImage?<Image source={src} style={styleImage}/>:null}
    </TouchableOpacity>
  )
}
