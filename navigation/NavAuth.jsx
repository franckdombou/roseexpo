import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneAuth1 from '../components/auths/PhoneAuth1';
import PhoneAuth2 from '../components/auths/PhoneAuth2';
import Bienvenue from '../components/auths/Bienvenue';
import Birthday from '../components/auths/Birthday';
import EmailAuth1 from '../components/auths/EmailAuth1';
import Genre from '../components/auths/Genre';
import CentreInteret from '../components/auths/CentreInteret';
import Acceuil from '../components/auths/Acceuil';
import Photo from '../components/auths/Photo';
import Animation from '../components/auths/Animation';
import Animation1 from '../components/auths/Animation1';
import TabLayout from './NavTab';

const Stack = createNativeStackNavigator();

export default function NavAuth() {

  return (
    <Stack.Navigator>
      <Stack.Screen component={Animation1} name="Animation1"  options={{ headerShown: false }} />
      <Stack.Screen component={Acceuil} name="Acceuil" options={{ headerShown: false }} />
      <Stack.Screen component={PhoneAuth1} name="PhoneAuth1" options={{ headerShown: false }} />
      <Stack.Screen name="PhoneAuth2" component={PhoneAuth2} options={{ headerShown: false }} />
      <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false, }} />
      <Stack.Screen name="Birthday" component={Birthday} options={{ headerShown: false }} />
      <Stack.Screen name="EmailAuth1" component={EmailAuth1} options={{ headerShown: false }} />
      <Stack.Screen name="Genre" component={Genre} options={{ headerShown: false }} />
      <Stack.Screen name="CentreInteret" component={CentreInteret} options={{ headerShown: false }} />
      {/* <Stack.Screen name="tabLayout" component={TabLayout} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen component={Animation} name="Animation"  options={{ headerShown: false }} /> */}
      <Stack.Screen component={Photo} name="Photo" options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


