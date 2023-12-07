import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { NavContext } from '../../App';

// const tab = [1, 11, 1, 1, , 1, 1, 1]

const Birthday = ({navigation, route}) => {
    const [chiffre1, setChiffre1] = React.useState("")
    const [chiffre2, setChiffre2] = React.useState("")
    const [chiffre3, setChiffre3] = React.useState("")
    const [chiffre4, setChiffre4] = React.useState("")
    const [chiffre5, setChiffre5] = React.useState("")
    const [chiffre6, setChiffre6] = React.useState("")
    const [chiffre7, setChiffre7] = React.useState("")
    const [chiffre8, setChiffre8] = React.useState("")
    const [validFormNumber, setValidFormNumber] = React.useState(false)

    const {dateNaissance, setDateNaissance}= useContext(NavContext)

    function suite(){
        const tab=[chiffre1, chiffre2,chiffre3,chiffre4,chiffre5, chiffre6,chiffre7,chiffre8]
        //dispatch verfier phone
        setDateNaissance(tab)
        navigation.navigate(newLocal)
    }
  const newLocal = "Genre";

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
        <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
            {/** header */}
            <View style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                <Ionicons name="ios-chevron-back" size={35} color="gray" />
            </View>

            <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "white", height: "95%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingLeft: 13, paddingTop: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>Quelle est ta date de naissance?</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 40 }}>
                    <TextInput
                        value={chiffre1}
                        onChangeText={setChiffre1}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="Y"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        value={chiffre2}
                        onChangeText={setChiffre2}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="Y"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        value={chiffre3}
                        onChangeText={setChiffre3}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="Y"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        value={chiffre4}
                        onChangeText={setChiffre4}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="Y"
                        placeholderTextColor="gray"

                    />
                    <Text style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}>/</Text>

                    <TextInput
                        value={chiffre5}
                        onChangeText={setChiffre5}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="M"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        value={chiffre6}
                        onChangeText={setChiffre6}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="M"
                        placeholderTextColor="gray"

                    />

                    
                    <Text style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}>/</Text>

                    <TextInput
                        value={chiffre7}
                        onChangeText={setChiffre7}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="D"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        value={chiffre8}
                        onChangeText={setChiffre8}
                        style={{ width: 25, fontSize: 20, textAlign: "center", borderBottomWidth: 3 }}
                        keyboardType="numeric"
                        placeholder="D"
                        placeholderTextColor="gray"

                    />


                </View>
                <Text style={{ fontWeight: "300", fontSize: 15, marginTop: 20 }}>Ton profil affiche ton age, pas ta date de naissance.</Text>

                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontWeight: "500", color: "gray" }}></Text>
                </View>
                <TouchableOpacity onPress={()=>suite()} style={{ height: 50, width: "70%", backgroundColor: validFormNumber ? '#F63A6E' : "lightgray", alignSelf: "center", marginTop: 70, alignContent: "center", alignItems: "center", borderRadius: 25 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>SUIVANT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </SafeAreaView>
    )
}

export default Birthday

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingLeft: 20,
        borderRadius: 50,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
    },
})