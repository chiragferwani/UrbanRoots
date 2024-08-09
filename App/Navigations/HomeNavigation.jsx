import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListCategory from '../Screens/BusinessListCategory/BusinessListCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import Login from '../Screens/LoginScreen/Login';

const Stack = createStackNavigator();


export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='businesslist' component={BusinessListCategory}/>
        <Stack.Screen name='businessdetail' component={BusinessDetailsScreen}/>
        <Stack.Screen name='explorescreen' component={BookingScreen}/>
        <Stack.Screen name='loginscreen' component={Login}/>
    </Stack.Navigator>
  )
}