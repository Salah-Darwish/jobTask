import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../utils/colors";
const styles=ScaledSheet.create({
Container:{
    flex:1 ,
    alignItems:"center", 
    backgroundColor:colors.white,
 }, 
 InputsContainer:{
alignItems:'center'
 },
styleImageBackground:{
resizeMode:'contain', 
width:scale(340), 
height:verticalScale(200), 
justifyContent:'center', 
borderRadius:scale(20),
overflow:'hidden', 
marginTop:verticalScale(5),
borderBottomRightRadius:scale(0)
}, 
styleTextInBackground:{
color:colors.white, 
fontSize:"20@s", 
//fontWeight:'bold', 
marginLeft:scale(15),
marginBottom:verticalScale(10),
fontFamily:"Jaro-Regular-VariableFont_opsz"
},
styleTouch:{
width:scale(35),
height:verticalScale(35), 
backgroundColor:colors.TochIcon,
borderRadius:scale(17.5), 
alignItems:'center',
justifyContent:"center", 
marginLeft:scale(20),
marginBottom:verticalScale(5)

},
TextInput:{
    width:scale(320),
    height:verticalScale(50), 
   borderRadius:scale(10), 
   marginTop:verticalScale(30), 
    borderColor:colors.Touch, 
    borderWidth:scale(1), 
  paddingLeft:scale(50),
},
   label: {
      position: 'absolute',
      left: scale(10),
      top: verticalScale(18),
      paddingHorizontal: scale(8),
      fontSize: "15@s",
      fontWeight:'bold', 
      color:colors.text,
      zIndex:scale(4),
      backgroundColor:colors.white
    },
ContainerTextInput:{
    flexDirection:'row', 
    alignItems:'center', 
   
},
styleIconRight:{
    position:'absolute', 
    top:verticalScale(43),
    left:scale(10),
    color:colors.text, 
    zIndex:scale(4)
},
styleIconLeft:{
    position:'absolute', 
    top:verticalScale(43),
    right:scale(10),
    color:colors.text, 
    zIndex:scale(4)
},
CustomTextStyle:{
    color:colors.text, 
    fontSize:"17@s", 
    fontWeight:"bold", 
    marginTop:verticalScale(10),
    marginLeft:scale(156), 

},
styleTouchText:{
width:scale(280), 
height:verticalScale(50),
alignItems:'center', 
justifyContent:"center", 
marginTop:verticalScale(40), 
backgroundColor:colors.button, 
borderRadius:scale(10)
},
Text:{
color:colors.white, 
fontSize:"15@s", 
fontWeight:"bold"
},
TouchImage:{
width:scale(43), 
height:verticalScale(25), 
borderRadius:scale(5), 
backgroundColor:colors.white, 
elevation:scale(1),
alignItems:'center', 
justifyContent:'center', 
marginTop:verticalScale(30), 
marginLeft:scale(30)
},
StyleImg:{
resizeMode:'contain', 
width:scale(27)
},
error:{
    fontSize:'14@s', 
    color:colors.error, 
    fontWeight:'bold',  
    marginTop:verticalScale(5), 
    marginLeft:scale(160)
},
TochIcon:{
    alignItems:'center', 
    justifyContent:"center"
}, 
ImageHomeStyle:{
          width:scale(330), 
          height:verticalScale(180), 
        borderTopLeftRadius:scale(10), 
          borderTopRightRadius:scale(10), 
          overflow:"hidden"
        }, 
        CustomTextHome:{
            fontSize:scale(15),
                fontWeight:'bold',
                color:'gold',
              marginTop:verticalScale(10), 
        }, 
        containerImage:{
          flexDirection:'row', 
          marginTop:verticalScale(3), 
          width:scale(330), 
          height:verticalScale(40), 
          justifyContent:'space-between'
        }, 
        subContainer:{
  flexDirection:'row', 
  alignItems:'center', 
  padding:scale(10)
}, 
styleHomeHeader:{
  width:scale(340), 
  height:verticalScale(100), 
  alignItems:'center', 
  justifyContent:'center', 
  backgroundColor:'#d26060', 
  borderRadius:scale(10), 
  marginBottom:verticalScale(10), 
  marginTop:verticalScale(5)

}

}); 

export default styles;