import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import CartePhoto from '../otherscreens/CartePhoto';
import ModalScreen from '../otherscreens/ModalScreen';
import Swiper from 'react-native-deck-swiper';
import profils from '../../assets/data/profils';
import { useRef } from 'react';
import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('screen').width


export default function OneScreen() {

  const swipeRef = useRef(null)


  return (
    <React.Fragment>
      <View style={styles.swiperView}>
        <Swiper
          ref={swipeRef}
          cards={profils}
          containerStyle={{ backgroundColor: "transparent" }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  textAlign: "left",
                  color: "#4DED30",
                },
              },
            },
          }}
          animateCardOpacity
          verticalSwipe={false}
          onSwiped={(cardIndex) => { console.log("Bien connecté") }}
          onSwipedAll={() => { console.log('onSwipedAll') }}
          cardIndex={0}
          backgroundColor={'#4FD8E9'}
          onSwipedLeft={(cardIndex) => {
            console.log("Swipe NOPE")
           // swipeLeft(cardIndex)
          }}
          onSwipedRight={(cardIndex) => {
            console.log("Swipe MATCH")
          //  swipeRight(cardIndex)
          }}
          renderCard={(card) => card ?

            (
             
              <CartePhoto card={card} />
              
            ) : (
              <View style={styles.Infos2}>
                <Text style={{ fontSize: 24, lineHeight: 32 }}>
                  No more pictures
                </Text>
                <Image style={{ height: "60%", width: '90%' }}
                  height={100}
                  width={100}
                  source={require("../../assets/couple/cine.jpeg")} />
              </View>
            )
          }

        ></Swiper>
      </View>
      
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







  heartCross:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:30
  },
  Infos2 : {
  //  backgroundColor:'white',
    gap:40,
    height: "75%",
    position:'relative',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width:0,
      height:1,
    },
    shadowOpacity:0.2,
    shadowRadius:1.41,
    elevation:2
  },
  Infos : {
   // backgroundColor:'white',
    width: "100%",
    height: 70,
    position:'absolute',
    bottom: 0,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical: 18,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width:0,
      height:1,
    },
    shadowOpacity:0.2,
    shadowRadius:1.41,
    elevation:2
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    paddingHorizontal: 15
  },
 image : {
   width:80,
   height:80 
  },
  swiperView : {
  //  flex:1,
    marginTop:-60,
  //  backgroundColor:"white",
    width:WIDTH
  },
  imgProf : {
    width: "100%",
    position: 'absolute',
    top:0,
    height: "100%",
    borderRadius:10
  }
});
