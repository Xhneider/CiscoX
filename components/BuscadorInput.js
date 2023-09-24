import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const BuscadorInput = () => {
  return (
    <View style={styles.contenInput}>
      <TextInput
        maxLength={30}
        style={styles.Input}
        placeholder='Buscar'
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