import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useContext } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavContext } from '../../App';


const EmailAuth1 = ({navigation, route}) => {
    const {email, setEmail} = useContext(NavContext)
    const {mdp, setMdp} = useContext(NavContext)
    const [validFormNumber, setValidFormNumber] = React.useState(false)

    const suite = () => {
        // Expression régulière pour valider le format d'une adresse e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailRegex.test(email)) {
            navigation.navigate(newLocal)
        } else {
          Alert.alert('Erreur de validation', 'Veuillez entrer une adresse e-mail valide.');
        }
      };

   

    const newLocal = "Bienvenue";

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
        <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
            {/** header */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                <Ionicons name="ios-chevron-back" size={35} color="gray" />
            </TouchableOpacity>

            <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "white", height: "95%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingLeft: 13, paddingTop: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 10 }}>Ton adresse courriel ?</Text>
                <Text style={{ fontWeight: "300", fontSize: 15, marginTop: 10 }}>Ne perds pas l'acces à ton compte, valide avec ton email.</Text>
                <View style={{ flexDirection: "column", justifyContent: "flex-start", marginTop: 10 }}>

                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={{ width: WIDTH * 0.8, fontSize: 17, borderBottomWidth: 3,marginTop:20 }}
                        keyboardType="email-address"
                        placeholder= "Votre Email"
                        placeholderTextColor="gray"
                    />

                    <TextInput
                        value={mdp}
                        onChangeText={setMdp}
                        style={{ width: WIDTH * 0.8, fontSize: 17, borderBottomWidth: 3,marginTop:20 }}
                        keyboardType="default"
                        placeholder="Votre mot de pass"
                        placeholderTextColor="gray"
                    />

                </View>
                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontWeight: "500", color: "gray" }}></Text>
                </View>
                <TouchableOpacity onPress={()=>email.length>5 && mdp.length>2 ? suite():null} style={{ height: 50, width: "70%", backgroundColor: email.length>5 && mdp.length>2 ? '#F63A6E' : "lightgray", alignSelf: "center", marginTop: 70, alignContent: "center", alignItems: "center", borderRadius: 25 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>SUIVANT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </SafeAreaView>
    )
}

export default EmailAuth1

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