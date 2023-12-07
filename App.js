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


const Stack = createNativeStackNavigator();
export const NavContext = createContext()

function App() {

  const [modalMenu, setModalMenu] = useState(false)
  const [name, setName] = useState(false)
  const [genre, setGenre]=useState(null)
  const [dateNaissance, setDateNaissance]=useState([])
  const [interet, setInteret]=useState(null)
  const [categorieRose,setCategorieRose]=useState(null)
  const [position, setPosition]=useState(null)
  const [photo, setPhoto]=useState(null)
  const [phoneNumber, setPhoneNumber] = React.useState("0")
  const [validPhone,setValidPhone]=useState([])
  const [email, setEmail]=useState('')
  const [mdp, setMdp]=useState('')



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

  // const username = useSelector(selectUserName);

  return (
    <Provider store={stare}>
      <NavContext.Provider value={{ modalMenu, setModalMenu,genre, setGenre,categorieRose,setCategorieRose,
      dateNaissance, setDateNaissance,interet, setInteret,position, setPosition,photo, setPhoto,phoneNumber, 
      setPhoneNumber,validPhone,setValidPhone,email, setEmail,mdp, setMdp,name, setName
      }}>
        <NavigationContainer>
          {
            selectIsLoggedIn ?
              <Stack.Navigator initialRouteName='NavAuth' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NavAuth" component={NavAuth} />
              </Stack.Navigator>
              :
              <Stack.Navigator initialRouteName='tabLayout' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="tabLayout" component={TabLayout} />
              </Stack.Navigator>
          }

        </NavigationContainer>
      </NavContext.Provider>
    </Provider>
  );
}
{/* <NavContext.Provider value={{ modalMenu, setModalMenu }}> */ }
export default App;