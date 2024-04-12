import React from 'react';
import { View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg";

const Footer = ({ Active, navigation }) => {
  return (
      <View style={{position: "absolute", bottom: 0, backgroundColor: "#FFFFFF", height: 80, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <View style={{display: "flex", flexDirection: "row", width: "45%", justifyContent: "space-evenly", alignItems: "center", marginRight: "5%"}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Feed')}
          >
            <Svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M26.974 10.577l-8.849-8.85a5.843 5.843 0 00-8.25 0l-8.85 8.85A3.474 3.474 0 000 13.05v11.454a3.5 3.5 0 003.5 3.5h21a3.5 3.5 0 003.5-3.5V13.05a3.475 3.475 0 00-1.026-2.474zM17.5 25.67h-7v-4.59a3.5 3.5 0 017 0v4.59zm8.167-1.166A1.167 1.167 0 0124.5 25.67h-4.667v-4.59a5.833 5.833 0 10-11.666 0v4.59H3.5a1.167 1.167 0 01-1.167-1.166V13.05c.001-.309.124-.605.342-.824l8.85-8.847a3.51 3.51 0 014.95 0l8.85 8.85c.217.218.34.513.342.821v11.454z"
                fill={ Active == "Feed" ? "#000" : "#5F5F5F"}
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
          >
            <Svg
              width={28}
              height={30}
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M27.866 19.835L24.683 8.364a11.41 11.41 0 00-22.134.577L.087 20.018a3.672 3.672 0 003.584 4.468h4.415a6.12 6.12 0 0011.996 0h4.247a3.672 3.672 0 003.537-4.651zm-13.782 7.1a3.672 3.672 0 01-3.447-2.449h6.894a3.672 3.672 0 01-3.447 2.448zm11.219-5.38a1.215 1.215 0 01-.98.483H3.671a1.224 1.224 0 01-1.194-1.49L4.938 9.471a8.961 8.961 0 0117.382-.456l3.182 11.47a1.215 1.215 0 01-.2 1.07z"
                fill={ Active == "Notifications" ? "#000" : "#5F5F5F"}
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={{position: "absolute", left: (Dimensions.get('window').width / 2) - 40, top: "-30%", backgroundColor: "#00ACFF", borderRadius: "30"}}
          onPress={() => navigation.navigate('AddPost')}
        >
          <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{margin: 20}}
          >
            <Path
              d="M30.826 1.175A3.955 3.955 0 0027.092.11L5.756 4.602a6.661 6.661 0 00-3.805 11.31l2.291 2.29a1.334 1.334 0 01.391.944v4.224c.003.594.14 1.18.4 1.714l-.01.01.034.034a4 4 0 001.816 1.808l.035.035.01-.01c.533.26 1.119.396 1.713.4h4.224c.354-.001.693.139.943.389l2.29 2.29a6.617 6.617 0 006.834 1.611 6.578 6.578 0 004.46-5.315l4.5-21.383a3.967 3.967 0 00-1.056-3.778zM6.13 16.32l-2.293-2.29a3.92 3.92 0 01-.963-4.1 3.971 3.971 0 013.334-2.7L27.333 2.78 7.297 22.82v-3.674a3.97 3.97 0 00-1.166-2.827zm18.63 9.561a4 4 0 01-6.786 2.283l-2.294-2.294a3.971 3.971 0 00-2.825-1.17H9.181L29.22 4.665 24.761 25.88z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{display: "flex", flexDirection: "row", width: "45%", justifyContent: "space-evenly", alignItems: "center", marginLeft: "5%"}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Messages')}
          >
            <Svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M23.333 0H4.667A4.667 4.667 0 000 4.667v14a4.667 4.667 0 004.667 4.666H8.05l5.193 4.39a1.167 1.167 0 001.507 0l5.2-4.39h3.383A4.667 4.667 0 0028 18.667v-14A4.667 4.667 0 0023.333 0zm2.334 18.667A2.333 2.333 0 0123.333 21H19.95c-.552 0-1.085.196-1.506.552L14 25.305l-4.441-3.753A2.334 2.334 0 008.05 21H4.667a2.333 2.333 0 01-2.334-2.333v-14a2.333 2.333 0 012.334-2.334h18.666a2.333 2.333 0 012.334 2.334v14z"
                fill={ Active == "Messages" ? "#000" : "#5F5F5F"}
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
          >
            <Image source={require('../../assets/img/pp.png')} style={{width: 40, height: 40, borderRadius: 20, borderColor: "#000", borderWidth: 0.2}} />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Footer;