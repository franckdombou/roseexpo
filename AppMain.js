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
import { Provider, useSelector } from 'react-redux';
import { stare } from './store/stare';
import { selectIsLoggedIn } from './store/authSlice';
import Animation from './components/auths/Animation';


const Stack = createNativeStackNavigator();
export const NavContext = createContext()

function AppMain() {

  const selectIsLoggedIn1 = useSelector(selectIsLoggedIn);
 // console.log("selectIsLoggedIn22223",useSelector((state) => state.userAuth.isLoggedIn))
  //console.log(selectIsLoggedIn1)

  return (

        <NavigationContainer>
          {
            !selectIsLoggedIn1 ?
              <Stack.Navigator initialRouteName='NavAuth' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NavAuth" component={NavAuth} />
                 <Stack.Screen name="tabLayout" component={TabLayout} /> 
                <Stack.Screen name="Animation" component={Animation} />  
              </Stack.Navigator>
              :
              <Stack.Navigator initialRouteName='tabLayout' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="tabLayout" component={TabLayout} />
                 <Stack.Screen name="Animation" component={Animation} />
              </Stack.Navigator>
          }

        </NavigationContainer>
     
  );
}
export default AppMain