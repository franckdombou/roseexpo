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
  const [name, setName] = useState("")
  const [age, setAge]=useState(0)
  const [genre, setGenre]=useState("")
  const [dateNaissance, setDateNaissance]=useState([])
  const [interet, setInteret]=useState([])
  const [categorieRose,setCategorieRose]=useState("")
  const [position, setPosition]=useState("")
  const [photo, setPhoto]=useState([])
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [validPhone,setValidPhone]=useState(0)  //code de verification entre par le user
  const [email, setEmail]=useState('')
  const [mdp, setMdp]=useState('')
  const [errorEmailMdp, setErrorEmailMdp]=useState(false)



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
      setPhoneNumber,validPhone,setValidPhone,email, setEmail,mdp, setMdp,name, setName,
      errorEmailMdp, setErrorEmailMdp,age, setAge
      }}>
        <NavigationContainer>
          {
            selectIsLoggedIn ?
              <Stack.Navigator initialRouteName='NavAuth' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NavAuth" component={NavAuth} />
                <Stack.Screen name="tabLayout" component={TabLayout} />
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