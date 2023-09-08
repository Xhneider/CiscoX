import { View, Text, StyleSheet,Button,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Zocial'

const HomeScreen = ({navigation}) => {

  return (

    <View  style={style.backGround}>

      <Icon name='github' size={30} style={style.githIcon}/>

    {/*Imagen de sisco de inicio*/}
      <View style={style.contenedorIMG}>
        <Image style={style.imagenCisco}
        source={require('../assets/img/CiscoLogo.png')}/>
      </View>

    {/*Texto de pantalla de inicio*/}
      <View style={style.contenedorItem}>
        <Text style={style.text}>Scripts De Comandos De Cisco Paket Tracer</Text>
        <View style={style.contenDispositivo}>
          <Text style={style.textDispositivo}>Dispositivo: Switch</Text>
        </View>
      </View>


      <Button
        title="Go to coman data"
        onPress={() => {
          navigation.navigate('ComanData')
        }}
      />
    </View>
  )
}
const style=StyleSheet.create({
    text:{
        fontSize:25,
        color:'white',
        fontFamily:'MPLUSRounded1c-Light'
    },
    backGround:{
      width:'100%',
      height:'100%',
      backgroundColor:'#191924',
      position:'relative'
    },
    contenedorIMG:{
      width:'100%',
      height:135,
      alignItems:'center',
      justifyContent:'center',

    },
    imagenCisco:{
      width: 112, 
      height:60,
    },
    githIcon:{
      position:'absolute',
      right:20,
      top:10,
      color:'#0B666A',
      
    },
    contenedorItem:{
      marginLeft:40,
      marginRight:40,
    },
    contenDispositivo:{
      width:150,
      height:40,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:7,
      marginTop:15
    },
    textDispositivo:{
      color:'black',
      color:'#0B666A',
      fontFamily:'MPLUSRounded1c-Bold'
  }
})
export default HomeScreen