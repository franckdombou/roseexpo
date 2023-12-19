import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";




const InputBoxMatch = () => {
    const [text,setText]=useState("")
    const isMessage = false;

  return (
    <SafeAreaView style={styles.container}>
        {/* Icon */}
        {/* <AntDesign
         // onPress={pickImage}
          name="plus"
          size={20}
          color="#32de84"
        /> */}

        {/* Text Input */}
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Entrez votre message..."
          multiline
          numberOfLines={50}
        />

        {/* Icon */}
        <MaterialIcons
        //  onPress={onSend}
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </SafeAreaView>
  )
}

export default InputBoxMatch

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "transparent",
        padding: 5,
        paddingHorizontal: 10,
        alignItems: "center",
        position:"absolute",
        bottom:0
      },
      input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingLeft:20,
        borderRadius: 50,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
      },
      send: {
        backgroundColor: "#32de84",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
        margin:10
      },
    
      attachmentsContainer: {
        alignItems: "flex-end",
      },
      selectedImage: {
        height: 100,
        width: 200,
        margin: 5,
      },
      removeSelectedImage: {
        position: "absolute",
        right: 10,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
      },
})