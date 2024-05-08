import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList,ImageBackground } from 'react-native';
import axios from 'axios';
import { scale, verticalScale } from 'react-native-size-matters';
import  Icon  from 'react-native-vector-icons/FontAwesome6'
import { colors } from '../utils/colors';
import CustomText from '../commponents/CustomText';
import styles from '../Styles/styles';

export default function Home(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: 'cairo' },
        headers: {
          'X-RapidAPI-Key': '48d0ccd679mshc75fd92f2cbba11p1a39a0jsnfb9ee0687f2e',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const renderWeatherItem = ({ item }) => {
    const iconUrl = `https:${item.current.condition.icon}`; 
    return (
      <View style={{  alignItems: 'center', marginBottom: 10 }}>
        <ImageBackground source={require('../assets/img/Home.png')} style={styles.ImageHomeStyle}>

     <View style={{
      flexDirection:'row'
     }}>
        <Image source={{ uri: iconUrl }} style={{ width: 50, height: 50, marginRight: 10 }} />
             <CustomText text={item.current.temp_c} styleTextCustom={styles.CustomTextHome}/>
           
        </View>
         </ImageBackground>
        <View style={styles.containerImage}>
<View style={styles.subContainer}> 
  <Icon name="location-dot" size={20} color="#d26060"/>
        <CustomText text={item.location.name}
    styleTextCustom=    {[styles.CustomTextHome, {color:"gray",fontSize:scale(13), 
     marginLeft:scale(5), 
     marginTop:verticalScale(0)
    }]}/>

</View>
<View style={styles.subContainer}> 
  <Icon name="calendar-days" size={20} color="#d26060"/>
      <CustomText text={item.location.localtime}
    styleTextCustom=    {[styles.CustomTextHome, {color:"gray",fontSize:scale(13), 
     marginLeft:scale(5), 
     marginTop:verticalScale(0)
    }]}/>
      
</View>
</View>
</View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
<View style={styles.styleHomeHeader}>
<CustomText
text=" App Weather"
styleTextCustom={[styles.CustomTextHome, {color:colors.white,fontSize:scale(25)}]}
/>
</View>
      <FlatList
        data={weatherData ? [weatherData] : []}
        renderItem={renderWeatherItem}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
}
