import React from 'react'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Font from 'expo-font';

const loadFonts = () => {
    return Font.loadAsync({
        'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    });
};

const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('Error storing token:', error);
    }
};

export default function Login({ navigation }) {
    useEffect(() => {
        const loadApp = async () => {
          await loadFonts();
        };
    
        loadApp();
    }, []);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const authenthication = () => {
        axios.post('http://192.168.0.29:5000/users/login', {
            email: email,
            password: password
        }).then((response) => {
            storeToken(response.data.token);
            navigation.navigate("Feed");
        }).catch((error) => {
            console.log(error);
        })
    }



  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subTitle}>Enter your email and password to access your account</Text>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder='Enter your email'
                    textAlign='center'
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder='Enter your password'
                    textAlign='center'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.flexRow}>
                    <View>
                        <BouncyCheckbox
                            size={25}
                            fillColor="#00ACFF"
                            unfillColor="#EEEEEE"
                            iconStyle={{ borderColor: "#00ACFF"}}
                            text="Remember me"
                            textStyle={{ fontFamily: "Roboto-Regular", fontSize: 16, color: "#000000", textDecorationLine: "none" }}
                            disableTextDecoration={true}
                        />
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("ForgotPassword")}}>
                        <Text style={{fontFamily: "Roboto-Regular", fontSize: 16}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => authenthication()}>
                    <Text style={styles.buttonTextWhite}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.buttonTextWhite}>Sign In With Google</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ paddingTop: 30 }}>Don’t have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={[styles.blueText, { paddingTop: 30 }]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    link: {
        justifyContent: "center",
        alignItems: "center",
    },
    blueText: {
        color: "#00ACFF",
        fontFamily: "Roboto-Black",
    },
    label: {
        marginHorizontal: 12,
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: "#EEEEEE",
        borderRadius: 5,
        textAlign: "left",
        paddingHorizontal: 10,
        width: 300,
        color: "#696969",
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        borderRadius: 5,
        backgroundColor: "#00ACFF",
        padding: 10,
        margin: 15,
        height: 42,
        width: 300,
    },
    googleButton: {
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        borderRadius: 5,
        backgroundColor: "#000000",
        padding: 10,
        margin: 15,
        marginVertical: 0,
        height: 42,
        width: 300,
    },
    buttonTextWhite: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontFamily: "Roboto-Black",
        fontSize: 46,
        marginVertical: 16,
    },
    subTitle: {
        textAlign: "center",
        fontFamily: "Roboto-Light",
        fontSize: 16,
        paddingHorizontal: 50,
        marginBottom: 30,
    }
});
