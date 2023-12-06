// In App.js in a new project

import React, { useEffect, useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import 'react-native-gesture-handler'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font"
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import NavAuth from './navigation/NavAuth';
import TabLayout from './navigation/NavTab';
import Example from './components/otherscreens/Example';

export const NavContext = createContext()

const Stack = createNativeStackNavigator();

function App() {

  const [modalMenu, setModalMenu] = useState(false)

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })

  const onLayoutRootViewv = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }


  return (
    <NavContext.Provider value={{ modalMenu, setModalMenu }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='navAuth' screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Example" component={Example} /> */}
          <Stack.Screen name="navAuth" component={NavAuth} />
          <Stack.Screen name="tabLayout" component={TabLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavContext.Provider>
  );
}

export default App;