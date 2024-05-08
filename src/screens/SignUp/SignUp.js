import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../Styles/styles'
import ImageBackGround from '../../commponents/ImageBackground'
import CustomInput from '../../commponents/CustomInput'
import CustomText from '../../commponents/CustomText'
import CustomButton from '../../commponents/CustomButton'
import useInput from '../../utils/useInput'
import { scale,verticalScale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Form from './components/Form'
export default function SignUp({navigation}) {
  const [email,changeEmail]=useInput({initialInput:'',rules:[{Key:'isEmail'}]});
  const [password,changePassword]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 
 
 
  // Function to check Input is Valid or not and Navigate if Correct Input
  
  const dohandler=()=>{
    if(email.isValid&&password.isValid){
      navigation.navigate("SignIn")
    }
    else{
      Alert.alert("enter Valid Email Or Password")
    }
    
  }
 
  return (
    <View style={styles.Container}>
       <KeyboardAwareScrollView
        enableOnAndroid>
            <View style={styles.Container}>
      <ImageBackGround  styleBackground={styles.styleImageBackground}
      styleText={styles.styleTextInBackground}
   styleTouch={styles.styleTouch}
      text={"Sign up to your\naccount"}
      OnPress={()=>{
        navigation.navigate("SignIn")
      }}
      />
       <Form/>

      
      </View>
         </KeyboardAwareScrollView>
    </View>
 
  )
}
