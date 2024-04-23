import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"
import Footer from "./tools/Footer";
import { jwtDecode } from 'jwt-decode';
import "core-js/stable/atob";

const getUserIdFromToken = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      return decodedToken['userId'];
    }
  } catch (error) {
    console.log("Erreur lors de la récupération des informations de l'utilisateur :", error);
    return null;
  }
};

export default function Feed({ navigation }) {
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
      <TouchableOpacity onPress={() => navigation.navigate("Post")} style={{width: "90%"}} >
        <View style={styles.card}>
          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
              <View style={{display: "flex"}}>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                  <Text style={{fontFamily: "Roboto-Bold", marginHorizontal:6, fontSize:16}}>Urahara</Text>
                  <Text style={{fontFamily: "Roboto-Light", opacity: 0.5}}>@urahAra_</Text>
                </View>
                <Text style={{fontFamily: "Roboto-Regular", margin:6, fontSize:15}}>This is a post text</Text>
              </View>
            </View>
            <View>
              <Text>...</Text>
            </View>
          </View>
          <View>
            <Image/>
          </View>
          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 14 15"
                style={{margin: 5}}
              >
                <Path
                  fill="#000"
                  d="M12.998 6.678v5.034h-2.232l-.113.013c-2.073.46-3.446.794-4.13 1-.91.273-1.249.34-1.866.38-.461.03-.985-.14-1.224-.372-.131-.128-.23-.391-.27-.799a.466.466 0 0 0-.092-.237.498.498 0 0 0-.206-.159 1.052 1.052 0 0 1-.464-.38c-.118-.164-.194-.47-.208-.915a.464.464 0 0 0-.07-.231.492.492 0 0 0-.18-.17c-.429-.237-.641-.504-.685-.818-.05-.346.069-.737.378-1.181a.463.463 0 0 0 .075-.354.479.479 0 0 0-.205-.304c-.296-.199-.458-.475-.498-.866-.065-.623.351-1.083 1.294-1.176a7.26 7.26 0 0 1 2.5.2.524.524 0 0 0 .513-.158.468.468 0 0 0 .067-.51c-.369-.745-.574-1.359-.622-1.834-.062-.631.09-1.088.447-1.465.27-.286.703-.449.865-.415.214.043.353.162.534.575.107.245.159.453.247.939.085.461.131.67.228.942.29.828 1.005 1.685 1.963 2.276.672.415 1.4.739 2.164.964a.52.52 0 0 0 .148.021h1.642Zm.031 5.993a1.06 1.06 0 0 0 .63-.164c.23-.153.337-.393.339-.67l-.002-5.151a.84.84 0 0 0-.26-.713.966.966 0 0 0-.693-.254h-1.61a7.91 7.91 0 0 1-1.846-.83c-.773-.478-1.341-1.161-1.559-1.777-.074-.213-.114-.389-.19-.802-.1-.555-.164-.813-.31-1.145C7.226.475 6.829.136 6.283.023c-.538-.11-1.321.185-1.817.708-.549.58-.79 1.305-.701 2.201.038.386.15.817.334 1.297a8.109 8.109 0 0 0-1.9-.04C.722 4.335-.108 5.254.013 6.416c.053.5.243.926.566 1.26-.272.5-.38.995-.312 1.477.078.556.402 1.019.941 1.378.042.488.16.877.367 1.168.164.235.378.435.627.586.08.481.247.858.52 1.122.454.44 1.264.703 2.003.655.702-.045 1.118-.127 2.098-.422.646-.195 1.984-.518 4.001-.968h2.207-.001Zm-1.253-6.212a.46.46 0 0 0-.146-.339.504.504 0 0 0-.355-.14.522.522 0 0 0-.354.14.477.477 0 0 0-.146.34v5.4a.459.459 0 0 0 .146.338.502.502 0 0 0 .354.14.52.52 0 0 0 .354-.14.476.476 0 0 0 .147-.338v-5.4Z"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 14 14"
                style={{margin: 5}}
              >
                <Path
                  fill="#200E32"
                  d="M7.04 0a7.01 7.01 0 0 1 6.517 4.553 6.993 6.993 0 0 1-1.937 7.702 7.019 7.019 0 0 1-7.897.939l-.033-.012c-.005-.003-.005-.005-.006-.008l-.478-.27a.476.476 0 0 0-.271-.03c-.497.178-1.004.325-1.52.439l-.094.011c-.568.013-.854-.356-.854-.891l.014-.115c.129-.533.29-1.057.474-1.543a.365.365 0 0 0-.03-.284l-.129-.25a6.99 6.99 0 0 1 .226-6.88A7.014 7.014 0 0 1 7.041 0Zm-.006.976L6.837.98a6.036 6.036 0 0 0-4.98 2.89 6.016 6.016 0 0 0-.193 5.922l.126.247c.169.315.204.685.089 1.054-.18.475-.33.961-.449 1.455l.067-.257.276-.072c.095-.026.19-.054.285-.083l.289-.091.293-.1a1.47 1.47 0 0 1 .963.067c.068.033.152.079.259.139l.295.17c.005 0 .01.002.013.003l-.009-.001.202.1a6.043 6.043 0 0 0 6.458-.77l.154-.13a6.016 6.016 0 0 0 1.667-6.627A6.035 6.035 0 0 0 7.034.976Z"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 14 14"
                style={{margin: 5}}
              >
                <Path
                  fill="#200E32"
                  d="m13.967 1.682-.027.1-3.334 11.229c-.331 1.113-1.783 1.336-2.439.417l-.063-.096L5.308 8.7.658 5.837c-.987-.608-.825-2.077.23-2.474l.108-.036L12.236.056c1.016-.294 1.954.617 1.73 1.626Zm-1.379-.602-.052.01-11.24 3.27c-.233.069-.29.37-.12.525l.047.035L5.62 7.626l3.766-3.79c.19-.192.49-.21.7-.054l.061.052c.192.19.21.49.054.7l-.052.061L6.38 8.39l2.647 4.386a.3.3 0 0 0 .526-.017l.021-.055 3.335-11.228a.307.307 0 0 0-.32-.396Z"
                />
              </Svg>
            </View>
            <View>
              <Text style={{fontSize: 12, opacity: 0.5}}>9 nov.</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Footer Active="Feed" navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});