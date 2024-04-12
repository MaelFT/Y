import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import Svg, { Path } from 'react-native-svg';
import { useFonts } from 'expo-font';

export default function AddPost() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  });

  const [post, setPost] = useState('');

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, display: "flex", alignItems: "center", marginTop: 20}}>
      <View style={styles.card}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{display: "flex", flexDirection: "row"}}>
            <Image source={require('../assets/img/pp.png')} style={{width: 48, height: 48, borderRadius: 48}} />
            <View style={{display: "flex"}}>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "start", width: "100%"}}>
                <Text style={{fontFamily: "Roboto-Bold", marginHorizontal:6, fontSize:16}}>Urahara</Text>
                <Text style={{fontFamily: "Roboto-Light", opacity: 0.5}}>@urahAra_</Text>
              </View>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                autoFocus={true}
                maxLength={256}
                onChangeText={text => setPost(text)}
                value={post}
                placeholder="What's on your mind?"
                style={{fontFamily: "Roboto-Regular", marginHorizontal:6, fontSize:15, padding: 0, textAlign: "left",}}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={{backgroundColor: "#000000", borderRadius: 4, paddingHorizontal: 12, paddingVertical: 4, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: "#FFFFFF", fontFamily: "Roboto-Black"}}>Post</Text>
                <Svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{marginLeft: 5}}
                >
                  <Path
                    d="M11.85.86l-9.256 9.253c.2.098.42.15.642.15h1.585c.133 0 .26.053.354.147l.859.858a2.484 2.484 0 002.563.602 2.466 2.466 0 001.673-1.994l1.689-8.022c.08-.334.042-.686-.109-.995zM10.161.039L2.16 1.724A2.499 2.499 0 00.732 5.967l.858.858a.5.5 0 01.147.354v1.585c0 .223.052.443.15.643L11.142.15a1.465 1.465 0 00-.98-.111z"
                    fill="#fff"
                  />
                </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "98%",
    height: "auto",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});