import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../Styles/styles'
import ImageBackGround from '../../commponents/ImageBackground'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Form from './Component/Form'
export default function SignIn({navigation}) {

  return (
    <View style={styles.Container}>
       <KeyboardAwareScrollView
        enableOnAndroid>
            <View style={styles.Container}>
      <ImageBackGround  styleBackground={styles.styleImageBackground}
      styleText={styles.styleTextInBackground}
   styleTouch={styles.styleTouch}
      text={"Sign in to your\naccount"}
      />
    <Form/>
      </View>
         </KeyboardAwareScrollView>
    </View>
 
  )
}
