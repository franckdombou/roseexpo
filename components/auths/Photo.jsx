import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList,Image} from 'react-native'
import React, { useContext, useState } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { setSignIn } from '../../store/authSlice';
import { NavContext } from '../../App';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const tableauModal1 = [
    "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique",
    "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique",
    "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique",
    "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique", "Harry Potter", "Génération 90", "SoundCloud", "Spa", "Prendre soin de toi", "Heavy Métal",
    "Fètes à la maison", "Gin Tonic", "Gymnastique",
]
const Photo = ({ navigation, route }) => {
    const [genre1, setGenre1] = React.useState("")
    const [validGenreF, setValidGenreF] = React.useState(false)
    const [validGenreH, setValidGenreH] = React.useState(false)
    const [validGenre, setValidGenre] = React.useState(false)
    const newLocal = "tabs";

    const nav = useNavigation()


    const [tabInteret, setTabInteret] = React.useState([])
    const tabInt = [""]
    function insererDansTableau(donnee) {
        const index = tabInt.indexOf(donnee);
        console.warn(tabInt.includes(donnee))

        if (!tabInt.includes(donnee)) { tabInt.push(donnee) }
        else {
            if (index !== -1) {
                tabInt.splice(index, 1);
            }
        }
        console.log(tabInt)
    }
    // Fonction pour supprimer un élément du tableau
    const supprimerElement = () => {
        // Utilisation de la fonction de mise à jour pour supprimer le dernier élément
        setTabInteret((prevState) => prevState.slice(0, -1));
    };

    function selectGenre(gr) {
        setGenre1(gr)
        setValidGenre(true)
        if (gr === "F") {
            setValidGenreF(true)
            setValidGenreH(false)
        }
        else {
            setValidGenreH(true)
            setValidGenreF(false)
        }

    }

    const ajouterElement = (donnee) => {
        // Utilisation de la fonction de mise à jour pour ajouter un élément
        if (tabInteret.length < 5) {
            if (tabInteret.some((element) => element.value === donnee)) {
                setTabInteret((prevState) =>
                    prevState.filter((element) => element.value !== donnee)
                );
            } else {
                setTabInteret((prevState) => [
                    ...prevState,
                    { value: donnee },
                ]);
            }
        }
        if (tabInteret.some((element) => element.value === donnee)) {
            setTabInteret((prevState) =>
                prevState.filter((element) => element.value !== donnee)
            );
        }

    };

    const {genre,dateNaissance,position, interet, email, phoneNumber, mdp,name,categorieRose,age,ville,metier}= useContext(NavContext)

    const dispatch = useDispatch();

    const suite = () => {
        const user = {
            isLoggedIn: true,
            email: email,
            name: name,
            age: age,
            genre: genre,
            dateNaissance: dateNaissance,
            interet: tabInteret,
            position: position,
            phoneNumber:phoneNumber,
            categorieRose:categorieRose,
            metier:metier,
            ville:ville,
            photo: []
        };

        dispatch(setSignIn(user))
        console.log("user dans PHOTO", user)
        nav.navigate('Animation', {page:"tabLayout"})  ///MODIFIER
    }

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                {/** header */}
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                    <Ionicons name="ios-chevron-back" size={35} color="gray" />
                </TouchableOpacity>

                <View style={{ flexDirection: "column", backgroundColor: "white", height: "97%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingTop: 10 }}>
                    <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 30 }}>Ajoute tes photos .</Text>
                    <Text style={{ marginLeft: 15, fontWeight: "300", fontSize: 15, color: "gray", marginTop: 7 }}>Comme tu le souhaites</Text>

                    <View style={{ marginTop: 10, width: WIDTH, borderBottomWidth: 2, backgroundColor: "gray", borderColor: "lightgray" }}></View>
                    <ScrollView style={{ width: WIDTH, height: "80%" }}>
                        <View style={{ flexDirection: "column",  width: WIDTH, backgroundColor: "white", margin: 5, marginBottom: 100 }}>
                            <View style={{ flexDirection: "row",flexWrap: "nowrap",}}>
                            {
                                [1,1,1].map((item, index) => (
                                    <TouchableOpacity  onPress={pickImage} key={index} style={{ backgroundColor:'#eee' , height: 180, width: WIDTH/3.3,borderWidth: 1, borderRadius: 10, borderColor: "lightgray",margin:5 }}>
                                        {image && <Image source={{ uri: image }} style={{ height: 180, width: WIDTH/3.3, borderRadius: 10,}} />}
                                        <FontAwesome style={{position:"absolute",bottom:0,right:0}} name="plus-circle" size={27} color="#F63A6E" />
                                    </TouchableOpacity>
                                ))
                            }
                            </View>
                            <View style={{ flexDirection: "row",flexWrap: "nowrap",}}>
                            {
                                [1,1,1].map((item, index) => (
                                    <TouchableOpacity  onPress={pickImage} key={index} style={{ backgroundColor:'#eee' , height: 180, width: WIDTH/3.3,borderWidth: 1, borderRadius: 10, borderColor: "lightgray",margin:5 }}>
                                        {image && <Image source={{ uri: image }} style={{ height: 180, width: WIDTH/3.3, borderRadius: 10,}} />}
                                        <FontAwesome style={{position:"absolute",bottom:0,right:0}} name="plus-circle" size={27} color="#F63A6E" />
                                    </TouchableOpacity>
                                ))
                            }
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => suite()} style={{ height: 50, width: "70%", backgroundColor: '#F63A6E' , marginTop: 1, alignContent: "center", alignItems: "center", borderRadius: 25, position: "absolute", bottom: 0, left: '25%' }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>DEMARRER</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Photo

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