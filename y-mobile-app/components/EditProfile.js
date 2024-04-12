import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';
import { useFonts } from 'expo-font';

const EditProfile = ({ navigation }) => {
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
    <View style={styles.container}>
        <View>
            <Image source={require('../assets/img/banner.png')} style={{width: "100%", margin: 0, padding: 0, height: 120}} />
        <View style={{backgroundColor: "#FFFFFF", borderColor: "#000", borderWidth: 0.2}}>
          <Image source={require('../assets/img/pp.png')} style={{zIndex: 1, width: 80, height: 80, borderRadius: 20, borderColor: "#000", borderWidth: 0.2, position: "absolute", right: (Dimensions.get('window').width / 2) + 100, top: "-30%"}} />
          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingRight: 10, paddingVertical: 6, paddingLeft: 100}}>
            <View>
              <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.username}>Urahara</Text>
                <Text style={styles.joinedDate}>@urahAra_</Text>
              </View>
              <Text style={styles.joinedDate}>Joined January 2017</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: "#000000", borderRadius: 4, paddingHorizontal: 12, paddingVertical: 4, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: "#FFFFFF", fontFamily: "Roboto-Black"}}>Edit</Text>
                <Svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{marginLeft: 5}}
                >
                  <G clipPath="url(#clip0_425_80)" fill="#fff">
                    <Path d="M.586 9.56A2 2 0 000 10.973V12h1.026a2 2 0 001.415-.586l6.671-6.671-1.854-1.855L.586 9.559zM11.572.427a1.312 1.312 0 00-1.855 0L7.964 2.181 9.82 4.035l1.753-1.752a1.31 1.31 0 000-1.855z" />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_425_80">
                      <Path fill="#fff" d="M0 0H12V12H0z" />
                    </ClipPath>
                  </Defs>
                </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.follow}>
            <Text style={styles.following}>
              <Text style={{fontWeight: "bold"}}>30 </Text> 
              Following
            </Text>
            <Text style={styles.followers}>
              <Text style={{fontWeight: "bold"}}>3K </Text>
              Followers
            </Text>
          </View>
          <View style={styles.footer}>
              <Text style={styles.edit}>Post</Text>
              <View style={styles.after}></View>
              <Text style={styles.comments}>Comments</Text>
              <Text style={styles.likes}>Likes</Text>
          </View>
        </View>
        <View style={{alignItems: "center"}}>
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
        </View>
        <View style={{alignItems: "center"}}>
          <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 20}}>No more post</Text>
        </View>
        </View>
        <View style={{position: "absolute", bottom: 0, backgroundColor: "#FFFFFF", height: 80, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <View style={{display: "flex", flexDirection: "row", width: "45%", justifyContent: "space-evenly", alignItems: "center", marginRight: "5%"}}>
          <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M26.974 10.577l-8.849-8.85a5.843 5.843 0 00-8.25 0l-8.85 8.85A3.474 3.474 0 000 13.05v11.454a3.5 3.5 0 003.5 3.5h21a3.5 3.5 0 003.5-3.5V13.05a3.475 3.475 0 00-1.026-2.474zM17.5 25.67h-7v-4.59a3.5 3.5 0 017 0v4.59zm8.167-1.166A1.167 1.167 0 0124.5 25.67h-4.667v-4.59a5.833 5.833 0 10-11.666 0v4.59H3.5a1.167 1.167 0 01-1.167-1.166V13.05c.001-.309.124-.605.342-.824l8.85-8.847a3.51 3.51 0 014.95 0l8.85 8.85c.217.218.34.513.342.821v11.454z"
              fill="#000"
            />
          </Svg>
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
                fill="#5F5F5F"
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
          <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M23.333 0H4.667A4.667 4.667 0 000 4.667v14a4.667 4.667 0 004.667 4.666H8.05l5.193 4.39a1.167 1.167 0 001.507 0l5.2-4.39h3.383A4.667 4.667 0 0028 18.667v-14A4.667 4.667 0 0023.333 0zm2.334 18.667A2.333 2.333 0 0123.333 21H19.95c-.552 0-1.085.196-1.506.552L14 25.305l-4.441-3.753A2.334 2.334 0 008.05 21H4.667a2.333 2.333 0 01-2.334-2.333v-14a2.333 2.333 0 012.334-2.334h18.666a2.333 2.333 0 012.334 2.334v14z"
              fill="#5F5F5F"
            />
          </Svg>
          <Image source={require('../assets/img/pp.png')} style={{width: 40, height: 40, borderRadius: 20, borderColor: "#000", borderWidth: 0.2}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  after: {
    position: 'absolute',
    bottom: "-50%",
    left: 36,
    width: '10%',
    height: 2,
    backgroundColor: 'black',
  },
  card: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#000",
    borderWidth: 0.2,
  },
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  joinedDate: {
    fontSize: 14,
    opacity: 0.5,
  },
  follow: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingTop: 10,
  },
  following: {
    fontSize: 14,
    marginRight: 10,
  },
  followers: {
    fontSize: 14,
  },
  post: {
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  edit: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  comments: {
    fontSize: 16,
  },
  likes: {
    fontSize: 16,
  },
  noMorePost: {
    fontSize: 14,
    opacity: 0.5,
  },
  date: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-end',
  },
});

export default EditProfile;