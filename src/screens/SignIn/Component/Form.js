import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../commponents/CustomInput';
import CustomButton from '../../../commponents/CustomButton';
import { login_initial_values } from '../../../Formik/initialValues';
import { LoginSchema } from '../../../Formik/schema';
import styles from '../../../Styles/styles';
import CustomText from '../../../commponents/CustomText';
import { scale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
function Form() {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={login_initial_values}
      validateOnMount={true}
      validationSchema={LoginSchema}
      onSubmit={values=>{
       // console.log(values);
 navigation.replace("Home")
       }}
    >
      {({handleChange,handleBlur,handleSubmit,values,touched,errors,isValid}) => (
        <View style={styles.InputsContainer}>
          <CustomInput placeholder="Enter your Email" textLabel={"Email"}
      styleIcon={styles.styleIconRight}
      name="email-multiple-outline"
      keyboard="email-address"
      securityText={false}
      value={values.Email}
      onChangeText={handleChange('Email')}
      handleblur={handleBlur('Email')}
        disabled={true}
      />
      {(errors.Email&&touched.Email)&&
      <CustomText text={errors.Email} styleTextCustom={styles.error}/>}
       <CustomInput placeholder="Enter your Password" textLabel={"Password"}
      styleIcon={styles.styleIconRight}
      name="lock"
      keyboard="default"
      securityText={true}
         value={values.Password}
      onChangeText={handleChange('Password')}
      handleblur={handleBlur('Password')}
          disabled={true}
      />
        {(errors.Password&&touched.Password) &&
      <CustomText text={errors.Password} styleTextCustom={styles.error}/>}
      <CustomText text={"Forget Password?"} styleTextCustom={styles.CustomTextStyle}/>
      <CustomButton
      styleTouchContainer={styles.styleTouchText}
      isText
         styleText={styles.Text}
        text={"Sign In"}
        OnPress={handleSubmit}
    
      />
      <CustomText text={"Or"} styleTextCustom={[styles.CustomTextStyle,{marginLeft:scale(0) ,  

  }]}/>
        <CustomText text={"______________      ______________"} styleTextCustom={[styles.CustomTextStyle,{marginLeft:scale(0) ,
      color:colors.Touch,
      marginTop:scale(-32)

  }]}/>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
  marginRight:scale(30)
      }}>
 <CustomButton
     styleTouchContainer={styles.TouchImage}
isImage
src={require('../../../assets/img/google.png')} 
styleImage={styles.StyleImg} />
 <CustomButton
     styleTouchContainer={styles.TouchImage}
isImage
src={require('../../../assets/img/facebook.png')} 
styleImage={styles.StyleImg} />
 <CustomButton
     styleTouchContainer={styles.TouchImage}
isImage
src={require('../../../assets/img/twitter.png')} 
styleImage={styles.StyleImg} />
      </View>
        </View>
      )}
    </Formik>
  );
}

export default Form;
