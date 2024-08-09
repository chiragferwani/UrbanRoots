import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '../../Utlis/Colors';
import { useUser } from '@clerk/clerk-react';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {

  const {user} = useUser();
  const navigation = useNavigation();

  const onContact=()=>{
    Linking.openURL('mailto:usertestingcf@gmail.com'+"?subject=Great App!")
}

  const profileMenuHome=[
    {
      id:1, 
      name: 'Home', 
      icon: 'home',
    }, 
  ]
  const profileMenuExplore=[
    {
      id:2, 
      name: 'Explore', 
      icon: 'map',
    },
  ]
  const profileMenuContact=[
    {
      id: 3, 
      name: 'Contact Us', 
      icon: 'mail',
    },
  ]

  const onMenuClick =() => {
    navigation.push('loginscreen');
  }

  return (
    <View>
      <View style={{padding: 20, paddingTop:30, backgroundColor:Colors.PRIMARY}}>
      <Text style={styles.heading}>Profile</Text>
      <View style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image source={{uri:user.imageUrl}}
        style={{width: 80, height: 80, borderRadius:99}}
        />
        <Text style={{fontSize:24, marginTop:10, fontFamily: 'sfpro-bold', color: Colors.WHITE}}>{user.fullName}</Text>
        <Text style={{fontSize:16, marginTop:5, fontFamily: 'sfpro-bold', color: Colors.WHITE}}>{user?.primaryEmailAddress.emailAddress}</Text>
      </View>
    </View>
    <View style={{paddingTop:60}}>
      <FlatList
      data={profileMenuHome}
      renderItem={({item, index})=>(
        <TouchableOpacity onPress={()=> navigation.navigate('home')}
        style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom:40, paddingHorizontal: 80}}>
          <Feather name={item.icon} size={35} color="black" />
          <Text style={{fontFamily:'sfpro-bold', fontSize:20}}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
       <FlatList
      data={profileMenuExplore}
      renderItem={({item, index})=>(
        <TouchableOpacity onPress={()=> navigation.navigate('explorescreen')}
        style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom:40, paddingHorizontal: 80}}>
          <Feather name={item.icon} size={35} color="black" />
          <Text style={{fontFamily:'sfpro-bold', fontSize:20}}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
       <FlatList
      data={profileMenuContact}
      renderItem={({item, index})=>(
        <TouchableOpacity onPress={()=> onContact()}
        style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom:40, paddingHorizontal: 80}}>
          <Feather name={item.icon} size={35} color="black" />
          <Text style={{fontFamily:'sfpro-bold', fontSize:20}}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontFamily: 'sfpro-bold', 
    fontSize: 22, 
    color: Colors.WHITE
}, 
})