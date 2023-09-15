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
import BotonAd from './BotonAd'

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
        <BotonAd></BotonAd>
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
