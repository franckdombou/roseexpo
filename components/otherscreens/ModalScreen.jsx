import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity,Text,View } from 'react-native';

// import EditScreenInfo from '../EditScreenInfo';
// import { Text, View } from '../Themed';
import Slider from '@react-native-community/slider';
import { useContext, useState } from 'react';
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Octicons } from '@expo/vector-icons';

import { NavContext } from '../../App';

const tab = ["Bachelors", "In college", "High School", "phD", "In Grad School", "Master", "Trade School",]
const tab1 = ["Bachelors1", "In college", "High School", "phD", "In Grad School", "Master", "Trade School",]
const tab2 = ["Bachelors2", "In college", "High School", "phD", "In Grad School", "Master", "Trade School",]
const tab3 = ["Bachelors3", "In college", "High School", "phD", "In Grad School", "Master", "Trade School",]

export default function ModalScreen() {

  const [distance, setDistance] = useState(1)
  const [age, setAge] = useState(18)
  const [nombrePhoto, setNombrePhoto] = useState(0)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isModalVisible, setModalVisible] = useState(false);
  const [tableauModal1, setTableauModal1] = useState([""])
  const [nomRubrique, setNomRubrique] = useState("rubrique")

  function VoirModal1(nomRubrique1, tableauRubrique1) {
    setTableauModal1(tableauRubrique1)
    setNomRubrique(nomRubrique1)
    setModalVisible(!isModalVisible)
  }

  const Modal1 = ({ }) => {
    return (
      <Modal isVisible={isModalVisible}>
        <SafeAreaView style={{ height: HEIGHT }}>
          <TouchableOpacity style={{ height: HEIGHT * 0.7, width: WIDTH, alignSelf: "center" }}>
            <Text></Text>
          </TouchableOpacity>
          <View style={{ height: HEIGHT * 0.4, width: WIDTH, backgroundColor: "white", alignSelf: "center", position: "absolute", bottom: 0, borderRadius: 25 }}>
            {/** header */}
            <View style={{ height: "25%", width: "100%", borderTopLeftRadius: 25, borderTopRightRadius: 25, }}>
              <View style={{ alignSelf: "center", backgroundColor: "gray", width: 70, height: 5, marginTop: 5, borderRadius: 5 }}></View>
              <Entypo onPress={() => setModalVisible(!isModalVisible)} name="cross" size={25} color="gray" style={{ alignItems: 'center', justifyContent: "center", paddingTop: 1, marginLeft: 10, backgroundColor: "white", width: 25, }} />
              <View>
                <Text style={{ textAlign: "center", fontSize: 19, fontWeight: "800" }}>{nomRubrique}</Text>
              </View>
            </View>

            {/** corps */}
            <View style={{ height: 'auto', width: "98%", backgroundColor: 'white', alignSelf: "center", flexDirection: "row", flexWrap: "wrap", }}>
              {
                tableauModal1.map((value, index) => (
                  <TouchableOpacity key={index} style={{ borderWidth: 2, borderRadius: 20, width: "auto", height: 35, borderColor: "gray", marginLeft: 10, alignContent: "center", alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ textAlign: "center", color: "gray", padding: 5 }}>{value}</Text>
                  </TouchableOpacity>
                ))
              }


            </View>

            <TouchableOpacity style={{ height: '15%', width: "70%", backgroundColor: '#F63A6E', alignSelf: "center", marginTop: 10, alignContent: "center", alignItems: "center", borderRadius: 25 }}>
              <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 13, alignSelf: "center" }}>DONE</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }

  const modalMenu = useContext(NavContext)?.modalMenu
  const setModalMenu = useContext(NavContext)?.setModalMenu

  return (
    <Modal isVisible={modalMenu}>
      <View style={{ width: WIDTH, backgroundColor: "white", height: HEIGHT, alignSelf: "center" }}>
        <View style={{ backgroundColor: "white", height: "13%", width: WIDTH, flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontFamily: "bold", textAlign: "center", alignSelf: "center", marginTop: "15%", fontSize: 20, color: "gray" }}></Text>
          <Text style={{ fontFamily: "bold", textAlign: "center", alignSelf: "center", marginTop: "10%", fontSize: 20, color: "gray" }}>Parametres</Text>
          <TouchableOpacity
            onPress={() => {
              if (setModalMenu) {
                setModalMenu(!modalMenu);
              }
            }}
            style={{ marginTop: "15%", alignSelf: "flex-end", marginRight: 10, position: "absolute", right: 0, top: 7 }}>
            <Text style={{ fontFamily: "bold", fontSize: 14,color:"#318CE7" }}>Valider</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <View style={{ width: WIDTH, backgroundColor: "white", marginTop: 5, alignSelf: "center" }}>

            <View style={{ alignSelf: "center", marginTop: 5 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Distance maximale</Text>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>{distance} km</Text>
              </View>
              <Slider
                style={{ width: WIDTH * 0.9, height: 5, alignSelf: "center" }}
                minimumValue={1}
                maximumValue={100}
                minimumTrackTintColor="#F63A6E"
                maximumTrackTintColor="gray"
                onValueChange={setDistance}
                value={distance}
                step={1}
              />
            </View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Only show people in this range</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F63A6E' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Age maximale</Text>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>{age} ans</Text>
              </View>
              <Slider
                style={{ width: WIDTH * 0.9, height: 5, alignSelf: "center" }}
                minimumValue={18}
                maximumValue={70}
                minimumTrackTintColor="#F63A6E"
                maximumTrackTintColor="gray"
                onValueChange={setAge}
                value={age}
                step={1}
              />
            </View>

            <View style={{ marginBottom: 10, alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Only show people in this range</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F63A6E' }}
                thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>

          </View>

          <View style={{ marginTop: 2, width: WIDTH, padding: 10, flexDirection: "column", justifyContent: "space-around", backgroundColor: "rgba(239, 239, 240,1)" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(239, 239, 240,1)" }}>
              <View style={{ padding: 5, borderRadius: 10, alignSelf: "center", backgroundColor: "rgba(239, 239, 240,1)" }}>
                <Text style={{ fontWeight: "bold", color: "gray", fontSize: 15, alignItems: "center" }}>PREMIUM DISCOVERY</Text>
              </View>
              <View style={{ backgroundColor: "gold", padding: 5, borderRadius: 10, alignSelf: "center", }}>
                <Text style={{ fontWeight: "bold", color: "gray", fontSize: 15 }}>Spark Gold</Text>
              </View>
            </View>
            <View style={{ padding: 5, backgroundColor: "rgba(239, 239, 240,1)" }}>
              <Text style={{ color: "rgba(189, 195, 199,1)" }} >Preferences show you people who match your vibe, but won't limit who you see -- you'll still be able to match with people outside of your selections.</Text>
            </View>
          </View>

          <View style={{ width: WIDTH, backgroundColor: "white", marginTop: 15 }}>

            <View style={{ alignSelf: "center", marginTop: 5 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Nombre minimal de photos</Text>
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>{nombrePhoto}</Text>
              </View>
              <Slider
                style={{ width: WIDTH * 0.9, height: 5, alignSelf: "center" }}
                minimumValue={0}
                maximumValue={15}
                minimumTrackTintColor="#F63A6E"
                maximumTrackTintColor="gray"
                onValueChange={setNombrePhoto}
                value={nombrePhoto}
                step={1}
              />
            </View>



            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Interests</Text>
              <TouchableOpacity onPress={() => VoirModal1("Interest", tab3)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: 'center' }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <EvilIcons name="eye" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Looking for</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Looking", tab)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <MaterialCommunityIcons name="zodiac-cancer" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Zodiac</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Zodiac", tab3)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Ionicons name="ios-school-outline" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Education</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Education", tab2)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <FontAwesome5 name="baby-carriage" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Family Plans</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Family Plans", tab2)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <MaterialIcons name="person-outline" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Personality Type</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Personality", tab2)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Fontisto name="open-mouth" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Communication Style</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Communication Style", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Ionicons name="heart-circle-outline" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Love Style</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Love Style", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="drink" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Drinking</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Drinking", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <FontAwesome5 name="smoking" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Smoking</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Smoking", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Ionicons name="md-git-network-outline" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Workout</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Workout", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="email" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Network</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Network", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: "rgba(239, 239, 240,1)", width: WIDTH * 0.9, height: 2, marginTop: 10, alignSelf: "center" }}></View>

            <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <MaterialCommunityIcons name="sleep" size={24} color="gray" style={{ alignSelf: "center" }} />
                <Text style={{ fontWeight: "500", color: "gray", margin: 5 }}>Sleeping Habits</Text>
              </View>
              <TouchableOpacity onPress={() => VoirModal1("Sleeping Habits", tab1)} style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>select</Text>
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ height: 25 }}></View>


          </View>

          <Modal1 />

        </ScrollView>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
    // backgroundColor: "rgba(239, 239, 240,1)",
    //  backgroundColor: "red",
    //  marginBottom: 25,
    //  width: WIDTH,
    //  height:HEIGHT,
    // alignSelf:"center"
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


