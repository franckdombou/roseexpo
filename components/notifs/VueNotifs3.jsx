import {
    ImageBackground, StyleSheet,
    Text, View, Image, Dimensions, KeyboardAvoidingView, Platform,
    FlatList, TouchableOpacity
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from "dayjs";
const tab = ["E", "R", "E", "R", "E", "R", "R", "E"]
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
import messages from "../../assets/data/message.json"
import InputBox from './InputBox'



const VueNotifs3 = ({ route, navigation }) => {

    const { data } = route.params || {}

    const isMessage = false;

    const MessageRecu = () => {
        return (
            <View style={{ justifyContent: "center", flexDirection: "row", left: 15, width: WIDTH * 0.8, paddingLeft: 10 }}>
                <Image style={{ height: 30, width: 30, borderRadius: 60, alignSelf: "center", marginRight: 5 }} source={require("../../assets/couple/cine.jpeg")} />
                <View style={{ backgroundColor: "#eeeeee", borderRadius: 20, padding: 10 }}>
                    <Text style={{ fontFamily: "regular", textAlign: "center", }}>salut leThis guide points to the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use React Navigation. React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS. niang xadikoi ???</Text>
                </View>
            </View>
        )
    }

    const MessageEnvoyer = ({ message }) => {
        return (
            <View style={{ backgroundColor: "gray", borderRadius: 20, padding: 10, justifyContent: "center", width: WIDTH * 0.8, marginBottom: 10, marginTop: 10, left: 65 }}>
                <Text style={{ fontFamily: "regular", textAlign: "center", }}>salut le niang xadikoi This guide points to the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use React Navigation. React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS.???</Text>
            </View>
        )
    }

    const Mes = ({ message }) => {
        const isMessageRead = false;
        const isMyMsg = () => {
            return message.user.id === "u1"
        }

        return (
            <TouchableOpacity onPress={() => console.log(message)} style={[styles.containerMes,
            {
                alignSelf: isMyMsg() ? "flex-end" : "flex-start",
                backgroundColor: !isMyMsg() ? "#eee" : "#318CE7",
                borderBottomLeftRadius: !isMyMsg() ? 1 : 30,
                borderBottomRightRadius: !isMyMsg() ? 30 : 1,
            }]}>
                <Text style={{ fontFamily: "regular" }}>{message.text}</Text>

                <View style={{ flexDirection: "row", justifyContent: isMyMsg() ? "flex-end" : "space-evenly" }}>
                    <Text style={[styles.createdMes, { alignSelf: !isMyMsg() ? "flex-start" : "flex-end" }]}>
                        {dayjs(message.created).format("HH:mm A")}
                    </Text>
                    {isMessageRead ? (
                        <MaterialCommunityIcons style={{ alignSelf: isMyMsg() ? "flex-end" : "flex-start" }} name="read" size={16} color="#5bb6c9" />
                    ) : (
                        <MaterialCommunityIcons style={{ alignSelf: isMyMsg() ? "flex-end" : "flex-start" }} name="check" size={16} color="#5bb6c9" />
                    )}
                </View>
                {/* <Text style={[styles.createdMes,{alignSelf:!isMyMsg()? "flex-start":"flex-end"}]}>{message.created.slice(11, 16)}</Text> */}
            </TouchableOpacity>
        )
    }
    //    console.log(messages)

    return (
        <>
            {/** header */}
            <View style={{ backgroundColor: "#eee", height: "15%", width: WIDTH, flexDirection: "row", justifyContent: "space-between", paddingTop: 50, top: 0, paddingLeft: 15, paddingRight: 15 }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={40} color="gray" />
                </TouchableOpacity>
                <View style={{ flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                    <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={require("../../assets/couple/cine.jpeg")} />
                    <Text style={{ fontFamily: "regular", textAlign: "center" }}>{data.text.slice(0, 8) + "..."}</Text>
                </View>
                <MaterialCommunityIcons name="video" size={30} color="gray" />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 1 : 1}
                style={styles.bgK}
            >

                <ImageBackground source={require('../../assets/watzapp.png')} style={styles.bg}>
                    {
                        !isMessage ?
                            <FlatList
                                data={messages}
                                renderItem={(({ item }) => <Mes  message={item} />)}
                                style={styles.list}
                                inverted

                            /> :
                            <View style={{alignSelf: "center", height: HEIGHT * 0.5, width: WIDTH * 0.7, padding: 10,alignContent:"center",alignItems:"center"}}>
                                <View style={{ alignSelf: "center", top: "50%" }}>
                                    <View style={{flexDirection:"row",justifyContent:"center",alignSelf:"center"}}>
                                        <Text style={{fontFamily:"regular",textAlign:"center",color:"gray",fontSize:15}}>Tu as matché avec </Text>
                                        <Text style={{fontFamily:"bold",textAlign:"center",color:"gray",fontSize:17}}>Franck</Text>
                                    </View>

                                    <Image style={{ height: 180, width: 180, borderRadius: 80, }} source={require('../../assets/couple/fem3.jpeg')} />
                                </View>
                            </View>
                    }

                    <InputBox />
                </ImageBackground>
            </KeyboardAvoidingView>
        </>

    )
}

export default VueNotifs3

const styles = StyleSheet.create({
    bg: {
        flex: 1,
     //   height:HEIGHT*2
     paddingBottom:50
    },
    bgK: {
        flex: 1,
        height:HEIGHT*2,
       // paddingBottom:100
    },
    list: {
        padding: 10,
      //  height:HEIGHT*2
    },
    containerMes: {
        maxWidth: "80%",
        margin: 5,
        padding: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1
    },
    textMes: {

    },
    createdMes: {
        color: "gray",
        fontSize: 10
    }
})