import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavContext } from '../../App';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/authSlice';
import { useNavigation } from '@react-navigation/native';



const loginSchema = Yup.object().shape({
    email: Yup.string().email('Entrez un email valide!').required('l\'adresse email est obligatoire!'),
    password: Yup.string().min(5, ({ min }) => `Au moins ${min} caractères`).required('Mot de pass obligatoire!')
});


const Acceuil = ({ navigation, route }) => {

    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    const [mdpOublie, setMdpOublie] = useState(false);
    const { errorEmailMdp, setErrorEmailMdp } = useContext(NavContext)

    const dispatch = useDispatch();

    const nav = useNavigation()

    function suite(values) {
        const user = {
            isLoggedIn: true,
            email: values.email,
            password: values.password
        }
        dispatch(setLogin(user))
        nav.navigate('Animation', {page:"tabLayout"})  ///MODIFIER
    }

  



    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validateOnMount={true}
            onSubmit={values => console.log(values.password)}
            validationSchema={loginSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "white" }}>
                    <Image style={{ height: HEIGHT / 1.9, alignSelf: "center" }} resizeMethod="resize" source={require('../../assets/tinder.jpg')} />
                    <Image style={{ height: HEIGHT / 2, position: "absolute", alignSelf: "center", top: "7%", paddingRight: 100 }} resizeMethod="resize" source={require('../../assets/logorougeremove.png')} />

                    {/**  */}
                    {/* <Image style={{ height: HEIGHT/2,alignSelf:"center"}} resizeMethod="resize"  source={require('../../assets/roselogo.jpeg')} /> */}
                    <View style={styles(isValid).bottomView}>
                        <View style={{ padding: 40 }}>
                            <Text style={{ color: "#F63A6E", fontSize: 25, fontFamily: "regular" }}>Bienvenue <FontAwesome name="heart" size={17} color="#F63A6E" /></Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PhoneAuth1')}>
                                <Text style={{ color: "gray", marginTop: 10, marginBottom: 10 }}>
                                    Pas de compte ?
                                    <Text style={{ color: "#F63A6E", fontStyle: "italic" }}>{''} Inscris-toi !!!</Text>
                                </Text>
                            </TouchableOpacity>
                            {/** MDP Email incorrect */}
                            {errorEmailMdp && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular", }}>Email ou mdp incorrect!!</Text>}
                            <KeyboardAvoidingView
                                behavior={Platform.OS === "ios" ? "padding" : "height"}
                                keyboardVerticalOffset={Platform.OS === "ios" ? 1 : 1}
                                style={styles(isValid).bgK}
                            >
                                <View style={{ marginTop: 7 }}>
                                    <View style={{ marginBottom: 10, }}>
                                        <FloatingLabelInput
                                            label={'Email'}
                                            labelStyles={{ alignSelf: 'center', paddingTop: 20, color: "#000", }}
                                            // isPassword
                                            keyboardType='email-address'
                                            togglePassword={show}
                                            containerStyles={{ borderColor: "#F63A6E", borderWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, }}

                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        // style={{borderTopColor:'#F63A6E'}}
                                        />
                                        {touched.email && errors.email && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular" }}>{errors.email}</Text>}
                                        <Text></Text>

                                    </View>
                                    <View style={{ borderColor: "red" }}>
                                        <FloatingLabelInput
                                            label={'Password'}
                                            labelStyles={{ alignSelf: 'center', paddingTop: 20, color: "#000", }}
                                            isPassword
                                            togglePassword={show}
                                            containerStyles={{ borderColor: "#F63A6E", borderWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, marginTop: 20 }}
                                            //value={cont}
                                            //onChangeText={value => setCont(value)}
                                            customShowPasswordComponent={<Feather name="eye" size={24} color="black" />}
                                            customHidePasswordComponent={<Feather name="eye-off" size={24} color="black" />}

                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}

                                        // style={{borderTopColor:'#F63A6E'}}
                                        />
                                        {touched.password && errors.password && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular" }}>{errors.password}</Text>}
                                        <Text></Text>
                                    </View>
                                </View>
                                {/** forgot passe word */}
                                <View style={styles(isValid).forgot}>
                                    <Pressable style={{ flex: 1, marginLeft: -20, flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{}}> </Text>
                                        <Text style={{ textAlign: "center", color: "gray", fontFamily: "regular" }}>
                                            Mot de passe
                                            <Text style={{ color: "#F63A6E", fontStyle: "italic", fontFamily: "regular" }}>{''} oublié ?</Text>
                                        </Text>
                                    </Pressable>
                                </View>

                                {/** login button */}
                                <View style={{ height: 100, justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity disabled={!isValid} onPress={() => suite(values)} style={[styles(isValid).loginButton, styles(isValid).shadow]}>
                                        <Text style={{ textAlign: "center", fontSize: 20, fontFamily: 'bold', color: "white", }}>Login</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={{ flex: 1, flexDirection: "column" }}>
                                    <Text style={{ fontFamily: "regular", textAlign: "center", color: "gray" }}>Se connecter avec :</Text>
                                    <Image style={[styles(isValid).shadow, { alignSelf: "center", width: 50, height: 50, }]} source={require('../../assets/gmail.png')} />
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </View>
                    </View>
                </ScrollView >
            )}
        </Formik>

    )
}

export default Acceuil

const styles = (isValid) => StyleSheet.create({
    brandview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    brandviewText: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopRightRadius: 60,
        // height: "40%"
    },
    bgK: {
        flex: 1,
        height: HEIGHT * 0.5,
        // paddingBottom:100
        //  backgroundColor:"red"
    },
    forgot: {
        height: 50,
        marginTop: 20,
        flexDirection: "row"
    },
    loginButton: {
        backgroundColor: isValid ? '#F63A6E' : "gray",
        alignSelf: 'center',
        width: WIDTH / 2,
        justifyContent: "center",
        height: 50,
        borderRadius: 30,
    },
    shadow: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 15
    }
})