import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { useFonts } from 'expo-font';
import Footer from "./tools/Footer";

export default function Trends({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  });

  return (
    <View style={{ flex: 1, display: "flex", marginTop: 20}}>
        <View style={{marginHorizontal: 30}}>
            <Text style={{fontSize: 34, fontWeight: "bold"}}>Trends</Text>
            <View style={{marginTop: 24}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>#ONEPIECE1090</Text>
                <Text style={{color: "#5F5F5F", marginTop: 4}}>4,590 posts</Text>
                <View style={{height: 1, width: "100%", backgroundColor: "#CFCFCF", marginTop: 20}}></View>
            </View>
            <View style={{marginTop: 24}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>#TRENDS</Text>
                <Text style={{color: "#5F5F5F", marginTop: 4}}>8,590M posts</Text>
                <View style={{height: 1, width: "100%", backgroundColor: "#CFCFCF", marginTop: 20}}></View>
            </View>
        </View>
        <Footer Active="" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({

});