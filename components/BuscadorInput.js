import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const BuscadorInput = () => {
  return (
    <View>
      <TextInput
        style={styles.Input}
        placeholder='Buscar'
      ></TextInput>
    </View>
  )
}

const styles= StyleSheet.create({
    Input:{
        width: 200,
        borderBottomColor:'black'
    }
})

export default BuscadorInput