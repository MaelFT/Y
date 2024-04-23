import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useFonts } from 'expo-font';

export default function Chat({ navigation }) {
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
        <View style={{display: "flex", width: "100%", height: "86%", justifyContent: "flex-end"}}>
            <View style={{width: "100%", padding: 10, display: "flex", flexDirection: "row-reverse"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
                    <View style={{display: "flex", flexDirection: "column", marginRight: 10, backgroundColor: "#00ACFF", borderRadius: 20, borderBottomRightRadius: 0, padding: 10, maxWidth: "90%"}}>
                        <Text style={{fontFamily: "Roboto-Regular", fontSize: 16, color: "#FFFFFF", textAlign: "right"}}>Urahara blablablablablabblabla</Text>
                    </View>
                    <Image source={require('../assets/img/pp.png')} style={{width: 20, height: 20, borderRadius: 48}} />
                </View>
            </View>
            <View style={{width: "100%", padding: 10, display: "flex", flexDirection: "row"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
                    <Image source={require('../assets/img/pp.png')} style={{width: 20, height: 20, borderRadius: 48}} />
                    <View style={{display: "flex", flexDirection: "column", marginLeft: 10, backgroundColor: "#FFFFFF", borderRadius: 20, borderBottomLeftRadius: 0, padding: 10, maxWidth: "90%"}}>
                        <Text style={{fontFamily: "Roboto-Regular", fontSize: 16}}>Urahara blablablablablabblabla</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{position: "absolute", bottom: 0, backgroundColor: "#FFFFFF", height: 60, width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderRadius: 15, margin: 30, paddingHorizontal: 10}}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.194 0C21.264 0 24 2.85 24 7.093v9.802c0 4.242-2.735 7.093-6.806 7.093h-10.4C2.729 23.988 0 21.138 0 16.895V7.093C0 2.851 2.73 0 6.794 0h10.4zm0 1.804h-10.4c-3.032 0-4.99 2.076-4.99 5.289v9.802c0 3.214 1.958 5.29 4.99 5.29h10.4c3.039 0 5.002-2.076 5.002-5.29V7.093c0-3.213-1.963-5.29-5.002-5.29zm.769 10.34c.007.006.015.012.03.027l.024.022.015.015.067.066c.217.218.817.83 2.603 2.664a.9.9 0 11-1.292 1.258s-2.463-2.529-2.639-2.7c-.186-.152-.486-.241-.78-.213-.3.03-.569.174-.76.406-2.794 3.39-2.828 3.422-2.874 3.466a2.627 2.627 0 01-3.71-.038s-1.119-1.135-1.138-1.158c-.278-.258-.773-.24-1.07.073l-1.84 1.94a.898.898 0 01-1.274.033.9.9 0 01-.034-1.273l1.837-1.94a2.592 2.592 0 013.652-.109l1.152 1.169a.825.825 0 001.165.013c.121-.143 2.74-3.323 2.74-3.323a2.918 2.918 0 011.98-1.054 2.943 2.943 0 012.146.656zM7.886 5.566a3.016 3.016 0 013.012 3.01 3.016 3.016 0 01-3.012 3.013 3.015 3.015 0 01-3.011-3.012c0-1.66 1.35-3.011 3.01-3.011zm-.002 1.803a1.208 1.208 0 10.004 2.416 1.208 1.208 0 00-.004-2.416z"
                        fill="#000"
                        fillOpacity={0.46}
                    />
                </Svg>
                <Text style={{color: "#8D8D8D", fontSize: 40, fontWeight: 100, marginHorizontal: 10}}>|</Text>
                <TextInput style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "#8D8D8D", fontSize: 16}}>Type something...</Text>
                </TextInput>
            </View>
            <TouchableOpacity 
                style={{backgroundColor: "#00ACFF", borderRadius: "30", display: "flex", alignContent: "center", justifyContent: "center"}}
                onPress={() => navigation.navigate('AddPost')}
            >
                <Svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{margin: 12}}
                >
                    <Path
                        d="M19.266.735a2.472 2.472 0 00-2.333-.667L3.597 2.877A4.163 4.163 0 001.22 9.945l1.431 1.431a.834.834 0 01.245.59v2.64c.001.372.087.738.25 1.071l-.007.006.022.022a2.5 2.5 0 001.135 1.13l.022.022.005-.007c.334.163.7.248 1.071.25h2.64c.222 0 .434.087.59.243l1.43 1.431a4.137 4.137 0 004.272 1.008 4.11 4.11 0 002.787-3.322l2.813-13.364a2.478 2.478 0 00-.66-2.361zM3.832 10.199L2.399 8.77a2.45 2.45 0 01-.602-2.563 2.482 2.482 0 012.084-1.688l13.202-2.78L4.561 14.262v-2.296a2.482 2.482 0 00-.73-1.767zm11.644 5.976a2.5 2.5 0 01-4.242 1.427l-1.433-1.434a2.481 2.481 0 00-1.766-.731H5.739l12.524-12.52-2.787 13.258z"
                        fill="#fff"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    </View>
  );
}