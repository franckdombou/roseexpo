import { View, Text, Image, Dimensions, KeyboardAvoidingView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import InputBoxMatch from './InputBoxMatch'
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const MatchPage = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 1 : 1}
            style={styles.bgK}
        >
            <ImageBackground resizeMode='cover' style={{ width: WIDTH, height: HEIGHT, flex: 1 }} source={require("../../assets/couple/fem2.jpeg")}>
                <View style={{ backgroundColor: "transparent", width: WIDTH,position:"absolute",top:70}}>
                    <TouchableOpacity onPress={() => { }}>
                        <Entypo name="cross" size={60} color="white" />
                    </TouchableOpacity>
                </View>
                {/* <Image style={{alignSelf:"center",width:WIDTH}} source={require("../../assets/matchlogo.png")} /> */}
                <Text style={{ alignSelf: "center", fontSize: 60, fontFamily: "bold", color: "#32de84", marginVertical: HEIGHT * 0.4, position: "absolute" }}> MATCH !!!</Text>
                <InputBoxMatch />

            </ImageBackground>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        //   height:HEIGHT*2
        paddingBottom: 50
    },
    bgK: {
        flex: 1,
        height: HEIGHT * 2,
        // paddingBottom:100
    },
    list: {
        padding: 10,
        //  height:HEIGHT*2
    }
})
export default MatchPage