import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import AddPost from './components/AddPost';
import ForgotPassword from './components/ForgotPassword';
import Notifications from './components/Notifications';
import Account from './components/Account';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Messages from './components/Messages';
import Post from './components/Post';
import Chat from './components/Chat';
import Trends from './components/Trends';

const Stack = createNativeStackNavigator();

const ChatButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
            <TextInput
                style={{ height: 40, width: '80%', borderColor: 'gray', marginBottom: 10, paddingHorizontal: 10, backgroundColor: "#F3F3F3", borderRadius: 10 }}
                placeholder="Search..."
            />
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <View style={{ backgroundColor: '#00ACFF', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  };

const Search = () => {
    return (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", height: 90}}>
            <TextInput
                style={{ height: 40, width: '80%', borderColor: 'gray', marginBottom: 10, paddingHorizontal: 10, backgroundColor: "#F3F3F3", borderRadius: 10, margin: 10 }}
                placeholder="Search..."
            />
        </View>
    );
  };

const HomeHeader = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", height: 70, paddingHorizontal: 20}}>
                <View style={{width: 21, height: 20}}>

                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Feed</Text>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('Trends')}>
                    <Svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <Path
                            d="M1.198 20l5.212-5.211a8.336 8.336 0 10-1.177-1.177L.02 18.823 1.198 20zM5.015 8.349a6.658 6.658 0 116.657 6.658 6.665 6.665 0 01-6.657-6.658z"
                            fill="#000"
                        />
                    </Svg>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{display: "flex", justifyContent:"space-around", alignItems: "center", flexDirection: "row"}}>
                <View>
                    <Text style={{marginBottom: 6, fontWeight: "bold"}}>For you</Text>
                    <View style={{position: 'absolute', bottom: "0%", left: 0, width: '100%', height: 2, backgroundColor: '#00ACFF'}}></View>
                </View>
                <View>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    );
  };

  const ChatProfile = () => {
    return (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", width: "100%", height: 100}}>
            <View></View>
            <View style={{display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: 6}}>
                <Image source={require('./assets/img/pp.png')} style={{width: 40, height: 40, borderRadius: 20, borderColor: "#000", borderWidth: 0.2}} />
                <Text style={{fontWeight: "bold"}}>Urahara</Text>
            </View>
            <View></View>
        </View>
    );
  };

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{headerTransparent:true, headerBackTitle:"", headerTitle:""}}
        />
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerTransparent:true, headerBackTitle:"Back", headerTitle:"", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Trends"
            component={Trends}
            options={() => ({
                headerTitle: "",
                headerBackTitle:"Back", 
                headerTintColor:"#000000",
                header: () => (
                  <Search/>
                ),
              })}
        />
        <Stack.Screen
            name="Chat"
            component={Chat}
            options={() => ({
                headerTitle:"",
                headerBackTitle:"Back",
                headerTintColor:"#000000",
                header: () => (
                  <ChatProfile/>
                ),
              })}
        />
        <Stack.Screen
            name="Messages"
            component={Messages}
            options={() => ({
                headerTitle: "",
                headerBackTitle:"Back", 
                headerTintColor:"#000000",
                headerRight: () => (
                  <ChatButton/>
                ),
              })}
        />
        <Stack.Screen
            name="Post"
            component={Post}
            options={{headerTitle:"Post", headerTitleAlign:"center", headerBackTitle:"", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Account"
            component={Account}
            options={{headerTransparent:true, headerBackTitle:"Back", headerTitle:"", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerTransparent:true, headerBackTitle:"Back", headerTitle:"", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{headerTitle:"Your notifications", headerBackTitle:"Back", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="AddPost"
            component={AddPost}
            options={{headerTitle:"AddPost", headerBackTitle:"Back", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
                headerTitle: "",
                headerBackTitle:"Back", 
                headerTintColor:"#000000",
                header: () => (
                  <HomeHeader/>
                ),
              }
            }
        />
        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerTransparent:true, headerTitle:"", headerBackTitle:"Back", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerTransparent:true, headerTitle:"", headerBackTitle:"Back", headerTintColor:"#000000"}}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{headerTransparent:true, headerTitle:"", headerBackTitle:"Back", headerTintColor:"#000000"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
