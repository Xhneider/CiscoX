import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Contexto } from './ContextoApp';

const ItemsMenu = () => {
  const { hidden } = useContext(Contexto);

  const router = () => {
    console.log('press router');
  };

  const Switch = () => {
    console.log('press switch');
  };

  const displayStyle = { display: hidden ? 'flex' : 'none' };

  return (
    <Animated.View style={[style.contenedorItem, displayStyle]}>
      <TouchableOpacity onPress={router}>
        <View style={style.item}>
          <Icon name="router-wireless" size={50} />
          <Text>Router</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Switch}>
        <View style={style.item}>
          <Icon name="switch" size={50} />
          <Text>Switch</Text>
        </View>
      </TouchableOpacity>
      
      {/*iconos de fleca de cierre*/}
      <IconEntypo name="chevron-left" size={45} />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  contenedorItem: {
    position: 'relative',
    width: 290,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 7,
    backgroundColor: '#00BAFF',
    display: 'flex',
    alignItems: 'center',
    margin:25
  },
});

export default ItemsMenu;
