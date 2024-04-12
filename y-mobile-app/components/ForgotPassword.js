import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import * as Font from 'expo-font';

const loadFonts = () => {
    return Font.loadAsync({
        'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    });
};

export default function ForgotPassword() {
    useEffect(() => {
        const loadApp = async () => {
          await loadFonts();
        };
    
        loadApp();
    }, []);

    const [email, setEmail] = useState();

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <View style={styles.container}>
            <Text style={styles.title}>Forgot password</Text>
            <Text style={styles.subTitle}>Please enter your email address to request a password reset</Text>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder='Enter your email'
                    textAlign='center'
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.buttonTextWhite}>Send reset password</Text>
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
        marginBottom: 100,
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
