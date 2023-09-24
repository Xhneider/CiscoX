import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import comandosDeConfiguracion from './BDComandos';
import {Dispositivo} from './ContextoApp';

const ComanDataScreen = ({route}) => {
  const {dispositivo} = useContext(Dispositivo);
  let id = route.params.id;
  return (
  
    <View style={styles.fondo}>
      {/* DATOS de comandos */}
      <View style={styles.contendorComandos}>
        <Text style={styles.textComandos}>
          {comandosDeConfiguracion[dispositivo][id].comando}
        </Text>
      </View>
        {/* DATOS de procedimiento */}
      <View>
        <Text style={styles.textPasos}>
          {comandosDeConfiguracion[dispositivo][id].pasos}
        </Text>
      </View>
        {/* DATOS de Concepto */}
      <View>
        <Text style={styles.textPasos}>
          {comandosDeConfiguracion[dispositivo][id].concepto}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  contendorComandos:{
    margin:18,
    marginTop:50,
    backgroundColor:'#fff',
    padding:'20',
    height:200,
    display:'flex',
    justifyContent:'flex-end',
    borderRadius:10

  },
  textComandos: {
    padding:10,
    fontSize: 17,
    color: 'black',
    fontFamily: 'CourierPrime-Bold',
  },
  textPasos: {
    padding:10,
    fontSize: 17,
    color: '#fff',
    fontFamily: 'MPLUSRounded1c-Medium',
  },
  fondo:{
    width:'100%',
    height:'100%',
    backgroundColor:'#191924',
    position:'relative'
  },
});

export default ComanDataScreen;
