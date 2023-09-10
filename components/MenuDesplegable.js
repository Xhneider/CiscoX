import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useState} from 'react';
import ItemsMenu from './ItemMenu';
import { Contexto } from './ContextoApp';

const MenuDesplegable = () => {

  {/* uso del contexto para controlar el hidden del menu */}
  const {hidden}=useContext(Contexto)
  const {setHidden}=useContext(Contexto)
  const [largo, setLargo] = useState(new Animated.Value(10));

  const pressMenu = () => {
    setHidden(!hidden);
    Animated.timing(largo, {
      toValue: hidden ? 10 : 300,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={pressMenu}>
      <View style={style.margenDeToque}>
        <Animated.View style={[style.menuDespleagble, {width: largo}]} />
        <ItemsMenu/>
      </View>
    </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  menuDespleagble: {
    backgroundColor: 'rgba(0, 168, 224, 0.9)',
    height: 200,
    position: 'absolute',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  margenDeToque:{
    width: '10%', 
    height: 200, 
    position: 'absolute', 
    top:200,
  }
});
export default MenuDesplegable;
