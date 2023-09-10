import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import BDComandos from './BDComandos';
import React from 'react';

export default function ListaDeComandos({navigation}) {

    const irComanData = ()=>{
        
    }

  const ListComand = BDComandos.map((item, key) => {
    return (
      <TouchableWithoutFeedback key={key} onPress={()=>{
        navigation.navigate('ComanData',{id:key})
      }}>
        <View style={styles.itemConten}>
          <Text>{item.titulo}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView style={styles.scrollContenedor}>
        {ListComand}
        <Text>
          Y eso es todo lo que necesitas saber sobre el método Array.map(). La
          mayoría de las veces, solo utilizarás el argumento del element dentro
          de la función callback, ignorando el resto. Eso es lo que suelo hacer
          en mis proyectos diarios Y eso es todo lo que necesitas saber sobre el
          método Array.map(). La mayoría de las veces, solo utilizarás el
          argumento del element dentro de la función callback, ignorando el
          resto. Eso es lo que suelo hacer en mis proyectos diarios :):)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '80%',
    height: '100%',
    backgroundColor: 'red',
    position: 'relative',
    marginLeft: 20,
    flex: 1,
  },
  scrollContenedor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  itemConten: {
    width: '100%',
    height: 100,
    backgroundColor: 'black',
    marginBottom: 20,
  },
});
