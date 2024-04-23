import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useFonts } from 'expo-font';
import Footer from "./tools/Footer";

export default function Messages({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, display: "flex", alignItems: "center"}}>
        <View style={{backgroundColor: "#FFFFFF"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <View style={{width: "100%", padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
                        <View style={{display: "flex", flexDirection: "column", marginLeft: 10}}>
                            <Text style={{fontFamily: "Roboto-Bold", fontSize: 16}}>@Urahara</Text>
                            <Text style={{fontFamily: "Roboto-Bold", fontSize: 14, opacity: 0.5}}>blablablablablabblablablablabla...</Text>
                        </View>
                    </View>
                    <View style={{display: "flex", alignItems: "flex-end"}}>
                        <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>11/04</Text>
                        <Svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                        <Rect width={16} height={16} rx={10} fill="#FF0000" />
                        <Text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontSize="6" style={{color: "#FFF", fontWeight: "bold", textAlign: "center"}}>
                            9
                        </Text>
                        </Svg>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{width: "100%", padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
                    <View style={{display: "flex", flexDirection: "column", marginLeft: 10}}>
                        <Text style={{fontFamily: "Roboto-Bold", fontSize: 16}}>@Urahara</Text>
                        <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>blablablablablabblablablablabla...</Text>
                    </View>
                </View>
                <View style={{display: "flex", alignItems: "flex-end"}}>
                    <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>09/04</Text>
                </View>
            </View>
        </View>
        <Footer Active="Messages" navigation={navigation} />
    </View>
  );
}