import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../Utlis/Colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: Colors.PRIMARY, 
        tabBarInactiveTintColor: Colors.BLACK
    }}>
        <Tab.Screen name='home' component={HomeNavigation}
        options={{
            tabBarLabel:({color})=> (
                <Text style={{color:Colors.BLACK, fontFamily:'sfpro-bold', fontSize:15,marginTop:-7}}>
                    Home
                </Text>
            ),
            tabBarIcon:({color, size})=>(
                <Feather name="home" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
        options={{
            tabBarLabel:({color})=> (
                <Text style={{color:Colors.BLACK, fontFamily:'sfpro-bold', fontSize:15,marginTop:-7}}>
                    Explore
                </Text>
            ),
            tabBarIcon:({color, size})=>(
                <MaterialIcons name="travel-explore" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color})=> (
                <Text style={{color:Colors.BLACK, fontFamily:'sfpro-bold', fontSize:15,marginTop:-7}}>
                    Profile
                </Text>
            ),
            tabBarIcon:({color, size})=>(
                <Feather name="user" size={size} color={color} />
            )
        }}
        />
    </Tab.Navigator>
  )
}