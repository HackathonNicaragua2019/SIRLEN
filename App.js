import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  KeyboardAvoidingView,ActivityIndicator, FlatList, AsyncStorage } from "react-native";

import Login from './src/screens/Login'
import Traductor from './src/screens/Traductor'
import Menu from './src/screens/Menu'
import Danza from './src/screens/Danza'
import Historia from './src/screens/Historia'
import Musica from './src/screens/Musica'
import Turismo from './src/screens/Turismo'
import Registrar from './src/screens/Registrar'
// import {listPalabras} from '../services'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen name="Traductor" component={Traductor}
          options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu}
          options={{ headerShown: false }} />
        <Stack.Screen name="Danza" component={Danza}
          options={{ headerShown: false }} />
        <Stack.Screen name="Historia" component={Historia}
          options={{ headerShown: false }} />
        <Stack.Screen name="Musica" component={Musica}
          options={{ headerShown: false }} />
        <Stack.Screen name="Turismo" component={Turismo}
          options={{ headerShown: false }} />
        <Stack.Screen name="Registrar" component={Registrar}
          options={{ headerShown: false }} />
      </Stack.Navigator>
   
    </NavigationContainer>
  );
}