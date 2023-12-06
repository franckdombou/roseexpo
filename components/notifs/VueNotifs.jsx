import { StyleSheet, Text, View, ScrollView, Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


// import type { NativeStackScreenProps } from '@react-navigation/native-stack';


const WIDTH = Dimensions.get('screen').width
//const tab = [1, 1, 1, 1, 1, 1,]
const tab = [
    {
        id: 0,
        text: "Looking for Love",
        image: require("../../assets/couple/couple1.avif"),
    },
    {
        id: 1,
        text: "Free Night",
        image: require("../../assets/couple/clubnight.jpg")
    },
    {
        id: 2,
        text: "Coffee",
        image: require("../../assets/couple/coffee2.jpg")
    },
    {
        id: 3,
        text: "Let's be Friends",
        image: require("../../assets/couple/friends.jpg")
    },
    {
        id: 4,
        text: "Binge Watchers",
        image: require("../../assets/couple/cine.jpeg")
    },
    {
        id: 5,
        text: "Sporty",
        image: require("../../assets/couple/sporty.jpeg")
    },
    {
        id: 6,
        text: "Gamers",
        image: require("../../assets/couple/gamers.jpeg")
    },
    {
        id: 7,
        text: "Yoga",
        image: require("../../assets/couple/yoga.jpeg")
    },
    {
        id: 8,
        text: "Travel",
        image: require("../../assets/couple/travel.jpeg")
    },
    {
        id: 9,
        text: "Date Night",
        image: require("../../assets/couple/datenights.jpeg")
    },
    {
        id: 10,
        text: "Skincares",
        image: require("../../assets/couple/skincares.jpeg")
    },
    {
        id: 11,
        text: "Self Care",
        image: require("../../assets/couple/selfCares.jpeg")
    },
    {
        id: 12,
        text: "Foodies",
        image: require("../../assets/couple/foods.jpeg")
    },
]
const VueNotifs = ({ route, navigation }) => {


    const Message=({value})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('notifs2',{data:value})}>
            <View style={{ margin: 10, flexDirection: "row", justifyContent: "flex-start" }}>
                <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={value.image}  />
                <View style={{flexDirection:"column",alignContent:"center",alignSelf:"center",marginLeft:10}}>
                    <Text style={{ fontWeight: "bold",fontSize:18 }}>{value.text}</Text>
                    <Text style={{ fontWeight: "bold", textAlign: "center",color:"gray" }}>Recently active, match now!</Text>
                </View>
            </View>
            <View style={{marginTop:7,backgroundColor:"gray",height:1,width:WIDTH*0.6,alignSelf:"center"}}></View>
        </TouchableOpacity>
        )
    }

    const Match = ({value})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('notifs2',{data:value})} style={{ flexDirection: "column", justifyContent: "center" }}>
            <View style={{ height: 140, width: 100, marginLeft: 5, alignItems: "center", borderWidth: 2, borderColor: "gold", borderRadius: 10 }}>
                <Image source={value.image} style={{ height: 137, width: 98, borderRadius: 10 }} />
                <AntDesign style={{ position: "absolute", bottom: 0 }} name="heart" size={24} color="gold" />
            </View>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>{value.text.slice(0,10) + "..."}</Text>
        </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <ScrollView style={{ height: "auto",marginTop:10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "column", justifyContent: "center" }}>
                    <View style={{ height: 140, width: 100, marginLeft: 5, alignItems: "center", borderWidth: 2, borderColor: "gold", borderRadius: 10 }}>
                        <Image source={require('../../assets/couple/fem3.jpeg')} style={{ height: 137, width: 98, borderRadius: 10 }} />
                        <AntDesign style={{ position: "absolute", bottom: 0 }} name="heart" size={24} color="gold" />
                        <View style={{ position: "absolute", top: "35%", width: 40, height: 40, borderRadius: 50, backgroundColor: "gold", alignItems: "center", alignContent: "center" }}>
                            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", marginTop: "25%" }}>100</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>Likes</Text>
                </View>
                {
                    tab.map((value, index) => (
                       <Match value={value} key={index} />
                    ))
                }
            </ScrollView>

            <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 30, fontSize: 21 }}>Messages</Text>
            <View>
                {
                    tab.map((value, index) => (<Message value={value}  key={index} />))
                }
            </View>

        </ScrollView>
    )
}

export default VueNotifs

const styles = StyleSheet.create({})