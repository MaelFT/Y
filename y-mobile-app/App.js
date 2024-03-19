import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Homescreen';
import LoginScreen from './components/Loginscreen';
import RegisterScreen from './components/Registerscreen';
import Feedscreen from './components/Feedscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerTransparent:true, headerTitle:""}}
          />
          <Stack.Screen
              name="Feed"
              component={Feedscreen}
              options={{headerBackButtonMenuEnabled:false, headerTitle:"Y", headerTitleAlign:"center", headerTintColor:"#000000"}}
          />
          <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerTransparent:true, headerTitle:"", headerBackTitle:"Back", headerTintColor:"#000000"}}
          />
          <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerTransparent:true, headerTitle:"", headerBackTitle:"Back", headerTintColor:"#000000"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
