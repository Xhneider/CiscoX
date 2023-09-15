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
import BotonAd from './BotonAd';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ListaDeComandos({navigation}) {
  const ListComand = BDComandos.map((item, key) => {
    return (
      <TouchableWithoutFeedback
        key={key}
        onPress={() => {
          navigation.navigate('ComanData', {id: key});
        }}>
        <View style={styles.itemConten}>
          <Text style={{fontFamily: 'MPLUSRounded1c-Black'}}>{item.titulo}</Text>
          <Icon name={'right'} size={20} style={styles.flechaICon} />
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView style={styles.scrollContenedor}>{ListComand}</ScrollView>
      <BotonAd></BotonAd>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '90%',
    height: '100%',
    position: 'relative',
    marginLeft: 20,
    flex: 1,
  },
  scrollContenedor: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  itemConten: {
    width: '100%',
    height: 60,
    backgroundColor: '#3b83bd',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    position: 'relative',
    paddingLeft: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  flechaICon: {
    position: 'absolute',
    right: 20,
  },
});
