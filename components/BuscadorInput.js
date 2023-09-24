import { View, Text,TextInput,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Buscador } from './ContextoApp'
const BuscadorInput = () => {
    const {Buscar}=useContext(Buscador)

  return (
    <View style={styles.contenInput}>
      <TextInput
        maxLength={30}
        style={styles.Input}
        placeholder='Buscar'
        onChangeText={text => Buscar(text)}
      ></TextInput>
    </View>
  )
}

const styles= StyleSheet.create({
    Input:{
        width: 200,
    },
    contenInput:{
        borderBottomColor: '#61dafb',
        borderBottomWidth: 1,
    }
})

export default BuscadorInput