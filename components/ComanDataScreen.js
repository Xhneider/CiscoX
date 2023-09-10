import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const ComanDataScreen = ({route}) => {
  return (
    <View>
      <Text style={styles.text}>{route.params.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    color:'black',
    fontFamily:'MPLUSRounded1c-Light'
},

})

export default ComanDataScreen