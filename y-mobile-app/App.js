import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import AddPost from './components/AddPost';
import ForgotPassword from './components/ForgotPassword';
import Notifications from './components/Notifications';
import Account from './components/Account';
import EditProfile from './components/EditProfile';
import Messages from './components/Messages';
import Post from './components/Post';

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
            name="Messages"
            component={Messages}
            options={() => ({
                headerTitle: "",
                headerBackTitle:"Back", 
                headerTintColor:"#000000",
                headerRight: () => (
                  <ChatButton
                    navigation={navigation}
                  />
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
            options={{headerTitle:"Y", headerTitleAlign:"center", headerBackTitle:"", headerTintColor:"#000000", gestureEnabled:false, headerBackVisible:false}}
        />
        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerTransparent:true, headerTitle:"Y", headerBackTitle:"Back", headerTintColor:"#000000"}}
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
