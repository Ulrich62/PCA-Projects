import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import Posts from './screens/Posts';
import SignIn from './screens/SignIn';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='Posts' component={Posts}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

