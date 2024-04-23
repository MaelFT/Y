import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import axios from 'axios';
import * as Font from 'expo-font';

const loadFonts = () => {
    return Font.loadAsync({
        'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    });
};

export default function Register({ navigation }) {
    useEffect(() => {
        const loadApp = async () => {
          await loadFonts();
        };
        loadApp();
    }, []);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const register = () => {
        if (password !== confirmPassword) {
            console.log("Passwords do not match")
            return;
        }
        axios.post('http://192.168.0.29:5000/users/register', {
            email: email,
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data['message'])
            navigation.navigate("Login");
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subTitle}>Enter your details to create an account</Text>
        <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
                placeholder='Enter your username'
                textAlign='center'
                keyboardType='default'
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
            />
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
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
                placeholder='Enter your confirm password'
                textAlign='center'
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(text) => setConfirmPassword(text)}
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
                <Text style={{fontFamily: "Roboto-Regular", fontSize: 16}}>Forgot password?</Text>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={() => register()}>
                <Text style={styles.buttonTextWhite}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.buttonTextWhite}>Sign Up With Google</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ paddingTop: 30 }}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={[styles.blueText, { paddingTop: 30 }]}>Sign in</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
        fontSize: 40,
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
