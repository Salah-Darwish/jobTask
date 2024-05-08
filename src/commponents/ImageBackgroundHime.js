import { StyleSheet, Text, View ,ImageBackground ,Image} from 'react-native'
import React from 'react'
import styles from '../Styles/styles'
import { scale ,verticalScale} from 'react-native-size-matters'
export default function ImageBackgroundHome(props) {
    const {
        src , 
        iconUrl,
        item    
    }= props
  return (
    <ImageBackground source={require('../assets/img/Home.png')} style={styles.ImageHomeStyle}>

     <View style={{
      flexDirection:'row'
     }}>
        <Image source={{ uri: iconUrl }} style={{ width: 50, height: 50, marginRight: 10 }} />
             <Text style={{
              fontSize:scale(15),
                fontWeight:'bold',
                color:'gold',
              marginTop:verticalScale(10), 
             }}>{item}°C</Text>
        </View>
         </ImageBackground>
  )
}

