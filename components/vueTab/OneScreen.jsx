import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import CartePhoto from '../otherscreens/CartePhoto';
import ModalScreen from '../otherscreens/ModalScreen';


export default function OneScreen() {
  return (
    <React.Fragment>
     <CartePhoto /> 
    <ModalScreen /> 
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
