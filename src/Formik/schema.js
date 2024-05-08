import * as Yup from 'yup';

const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    Email: Yup.string().required('Enter your Email').matches(EmailReg, 'Enter Email Correct'),
    Password: Yup.string().required('Enter Your Password').min(8, 'Enter Your Password Correct'),
})
export const RegistSchema = Yup.object().shape({
    FullName: Yup.string().required('Enter Yorn name'),
    Email: Yup.string().required('Enter your Email').matches(EmailReg, 'Enter Email Correct'),
    Password: Yup.string().required('Enter Your Password').min(8, 'password don\'t less 8 numbers and words '),
    ConfirmPassword: Yup.string().required('Enter Your Password').min(8, 'password don\'t less 8 numbers and words').oneOf([Yup.ref('Password'), null], "The Password and Confirm Password is different"),
})