import { View, Text, StyleSheet,Button,Image} from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Zocial'
import ListaDeComandos from './ListaDeComandos'
import { Dispositivo } from './ContextoApp'
import BuscadorInput from './BuscadorInput'
import MenuDesplegable from './MenuDesplegable';

const HomeScreen = ({navigation}) => {
  const {dispositivo} = useContext(Dispositivo)
  
  
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

      <View style={style.contenedorDispoInput}>
        <View style={style.contenDispositivo}>
          <Text style={style.textDispositivo}>Dispositivo: {dispositivo==0?'Switch':'Router'}</Text>
        </View>

        <BuscadorInput/>
      </View>
        
      </View>

    {/* Lista de Comandos */}
      <ListaDeComandos navigation={navigation}></ListaDeComandos>
      <MenuDesplegable></MenuDesplegable>
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
    },
    textDispositivo:{
      color:'black',
      color:'#0B666A',
      fontFamily:'MPLUSRounded1c-Bold'
  },
  contenedorDispoInput:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  }
})
export default HomeScreen