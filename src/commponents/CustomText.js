import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomText(props) {
    const {
styleTextCustom,
text
    }=props
  return (
    <View>
      <Text style={styleTextCustom}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})