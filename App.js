import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import ComanDataScreen from './components/ComanDataScreen';
import MenuDesplegable from './components/MenuDesplegable';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ComanData" component={ComanDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <MenuDesplegable></MenuDesplegable>
    </>

  )
}
