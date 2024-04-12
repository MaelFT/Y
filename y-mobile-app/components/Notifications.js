import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useFonts } from 'expo-font';
import Footer from "./tools/Footer";

export default function Notifications({ navigation }) {
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
    <View style={{ flex: 1, display: "flex", alignItems: "center", marginTop: 20}}>
        <View style={{width: "98%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#EBEBEB", padding: 4, borderRadius: 8}}>
            <TouchableOpacity style={{backgroundColor:"#FFFFFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4}}>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14, color: "#00ACFF"}}>View All</Text>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14, color: "#00ACFF", backgroundColor: "#F3F3F3", padding: 2, marginLeft: 8}}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14}}>Mentions</Text>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14, backgroundColor: "#E4E4E4", padding: 2, marginLeft: 8}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14}}>Post</Text>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14, backgroundColor: "#E4E4E4", padding: 2, marginLeft: 8}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14}}>Followers</Text>
                <Text style={{fontFamily: "Roboto-Light", fontSize: 14, backgroundColor: "#E4E4E4", padding: 2, marginLeft: 8}}>2</Text>
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor: "#FFFFFF", padding: 10, borderRadius: 10, marginTop: 10}}>
            <View style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
                    <View style={{display: "flex", flexDirection: "column", marginLeft: 10}}>
                        <Text style={{fontFamily: "Roboto-Bold", fontSize: 16}}>@Urahara</Text>
                        <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>liked your post</Text>
                    </View>
                </View>
                <View style={{display: "flex", alignItems: "flex-end"}}>
                    <Svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                    <Rect width={12} height={12} rx={6} fill="#00ACFF" />
                    </Svg>
                    <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>29 seconds ago</Text>
                </View>
            </View>
            <View style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
                    <View style={{display: "flex", flexDirection: "column", marginLeft: 10}}>
                        <Text style={{fontFamily: "Roboto-Bold", fontSize: 16}}>@Urahara</Text>
                        <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>followed you </Text>
                    </View>
                </View>
                <View style={{display: "flex", alignItems: "flex-end"}}>
                    <Svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                    <Rect width={12} height={12} rx={6} fill="#00ACFF" />
                    </Svg>
                    <Text style={{fontFamily: "Roboto-Light", fontSize: 14, opacity: 0.5}}>2 hours ago</Text>
                </View>
            </View>
        </View>
        <View>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 20   , marginTop: 20}}>No more notifications</Text>
        </View>
        <Footer Active="Notifications" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({

});