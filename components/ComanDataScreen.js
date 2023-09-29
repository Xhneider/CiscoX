import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import comandosDeConfiguracion from './BDComandos';
import {Dispositivo} from './ContextoApp';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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

      <Collapse>
        <CollapseHeader style={styles.headerDatos}>
          <View style={styles.contenedorTexto}>
            <Text style={styles.textPasos}>Teoria 🧠</Text>
            <View style ={styles.contentIcon}>
              <Icon name={'caretdown'} style={styles.icon} size={20} />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.textPasos}>
            {comandosDeConfiguracion[dispositivo][id].concepto}
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  contendorComandos: {
    margin: 18,
    marginTop: 50,
    backgroundColor: '#fff',
    padding: '20',
    height: 200,
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  textComandos: {
    padding: 10,
    fontSize: 17,
    color: 'black',
    fontFamily: 'CourierPrime-Bold',
  },
  textPasos: {
    padding: 10,
    fontSize: 17,
    color: '#fff',
    fontFamily: 'MPLUSRounded1c-Medium',
  },
  fondo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#191924',
    position: 'relative',
  },
  headerDatos: {
    backgroundColor: '#176B87',
    width: '80%',
    height: 40,
    borderRadius: 10,
    position:'relative',
    marginLeft:20
  },
  contenedorTexto: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentIcon:{
    display:'flex',
    width:'100%',
    position:'absolute',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  icon:{
    paddingRight:20
  }
});

export default ComanDataScreen;
