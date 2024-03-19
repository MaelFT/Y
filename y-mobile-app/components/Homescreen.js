import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useFonts } from 'expo-font';

export default function HomeScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

  return (
    <View style={styles.container}>
        <Image source={require('../assets/img/welcome.png')} style={{width: 300, height: 300}} />
        <Text style={styles.title}>Welcome to Y</Text>
        <Text style={styles.subTitle}><Text style={styles.blueText}>Y</Text> is a vibrant social networking platform designed to amplify your voice and connect you with the world.</Text>
        <View>
            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonTextWhite}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonTextWhite}>Log In</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    blueText: {
        color: "#00ACFF",
        fontFamily: "Roboto-Black",
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontFamily: "Roboto-Black",
        fontSize: 50,
        marginBottom: 16,
    },
    subTitle: {
        textAlign: "center",
        fontFamily: "Roboto-Light",
        fontSize: 16,
        paddingHorizontal: 38,
        marginBottom: 18,
    }
});
