import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';



const Stack = createNativeStackNavigator();
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     {/* <Stack.Screen name='Home' component={Home}/> */}
     {/* <Stack.Screen name='MyFlatList' component={MyFlatList}/> */}
     <Stack.Screen name='Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default App;
