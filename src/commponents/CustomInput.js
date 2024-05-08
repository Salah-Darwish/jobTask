import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React ,{useState} from 'react'
import styles from '../Styles/styles'
import Icon   from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils/colors';
export default function CustomInput(props){
   const {
    placeholder,
    textLabel,
    name,
    keyboard,
    securityText,
    value,
    onChangeText,
    handleblur, 
    disabled,
onPress, 
    styleIcon
  } = props;


    const renderLabel = () => {
  
        return (
          <Text style={styles.label}>
        {textLabel}
          </Text>
        );
    
    };
  return (
    <View >
        {renderLabel()}
        <View style={styles.ContainerTextInput}>
          <TouchableOpacity style={styleIcon} disabled={disabled}
        onPress={onPress}
          >
            <Icon name={name} size={30} 
            color={colors.text}

                />
                </TouchableOpacity>
<TextInput 
  style={styles.TextInput}
          placeholder={placeholder}
          placeholderTextColor="#ddd"
          keyboardType={keyboard}
          secureTextEntry={securityText}
          onChangeText={onChangeText}
           onBlur={handleblur}
           value={value}

/>


        </View>

    </View>
  )
}

