import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dailypic from './Screens.js/DailyPic';
import Spacecraft from './Screens.js/SpaceCraft';
import Starmap from './Screens.js/StarMap';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DailyPic" component={Dailypic}></Stack.Screen>
        <Stack.Screen name = "Spacecraft" component={Spacecraft}></Stack.Screen>
        <Stack.Screen name  = "Starmap" component={Starmap}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}