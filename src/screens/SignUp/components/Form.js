import React, { useState } from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../commponents/CustomInput';
import CustomButton from '../../../commponents/CustomButton';
import { regist_initial_values } from '../../../Formik/initialValues';
import { RegistSchema } from '../../../Formik/schema';
import styles from '../../../Styles/styles';
import CustomText from '../../../commponents/CustomText';

function Form() {
  const navigation = useNavigation();
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

  const toggleEye = () => {
    setEye((prevState) => !prevState); 
  };

  const toggleEye2 = () => {
    setEye2((prevState) => !prevState);
  };

  return (
    <Formik
      initialValues={regist_initial_values}
      validateOnMount={true}
      validationSchema={RegistSchema}
      onSubmit={(values) => {
        navigation.navigate('Home');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <View style={styles.InputsContainer}>
          <CustomInput
            placeholder="Enter your Name"
            textLabel={"FullName"}
            keyboard="default"
            value={values.FullName}
            onChangeText={handleChange('FullName')}
            handleblur={handleBlur('FullName')}
          />
          {(errors.FullName && touched.FullName) && (
            <CustomText text={errors.FullName} styleTextCustom={styles.error} />
          )}

          <CustomInput
            placeholder="Enter your Email"
            textLabel={"Email"}
            styleIcon={styles.styleIconRight}
            keyboard="default"
            value={values.Email}
            onChangeText={handleChange('Email')}
            handleblur={handleBlur('Email')}
          />
          {(errors.Email && touched.Email) && (
            <CustomText text={errors.Email} styleTextCustom={styles.error} />
          )}

          <CustomInput
            placeholder="Enter your Password"
            textLabel={"Password"}
            styleIcon={styles.styleIconLeft}
            name={eye ? 'eye-off-outline' : 'eye-outline'}
            keyboard="default"
            securityText={eye}
            value={values.Password}
            onChangeText={handleChange('Password')}
            handleblur={handleBlur('Password')}
            disabled={false}
            onPress={toggleEye} // Toggle eye icon visibility for Password field
          />
          {(errors.Password && touched.Password) && (
            <CustomText text={errors.Password} styleTextCustom={styles.error} />
          )}

          <CustomInput
            placeholder="Enter your Confirm Password"
            textLabel={"ConfirmPassword"}
            styleIcon={styles.styleIconLeft}
            name={eye2 ? 'eye-off-outline' : 'eye-outline'}
            keyboard="default"
            securityText={eye2}
            value={values.ConfirmPassword}
            onChangeText={handleChange('ConfirmPassword')}
            handleblur={handleBlur('ConfirmPassword')}
            disabled={false}
            onPress={toggleEye2} // Toggle eye icon visibility for Confirm Password field
          />
          {(errors.ConfirmPassword && touched.ConfirmPassword) && (
            <CustomText text={errors.ConfirmPassword} styleTextCustom={styles.error} />
          )}

          <CustomButton
            styleTouchContainer={[styles.styleTouchText]}
            isText
            styleText={styles.Text}
            text={"Sign Up"}
            OnPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
}

export default Form;
