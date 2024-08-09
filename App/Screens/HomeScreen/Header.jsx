import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import Colors from '../../Utlis/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Header() {
  const {user, isLoading} = useUser();
  return user&&(
    <View style={styles.container}>
    {/*Profile Section*/}
     <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
        <View>
            <Text style={{color:Colors.WHITE, fontFamily:'sfpro-bold'}}>Welcome</Text>
            <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:'sfpro-bold'}}>{user?.fullName}</Text>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      {/*Search Bar Section*/}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Welcome to UrbanRoots' style={styles.textInput}/>
            <MaterialCommunityIcons name="city-variant-outline" style={styles.searchbtn} size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20, 
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY, 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage:{
        width: 45,
        height: 45,
        borderRadius: 99
    }, 
    textInput:{
        padding: 7, 
        paddingHorizontal: 16, 
        backgroundColor: Colors.WHITE, 
        borderRadius: 8, 
        width: '85%', 
        fontSize: 16, 
        fontFamily:'sfpro-bold', 
        alignItems: 'center',
        textAlign: 'center'
    }, 
    searchBarContainer:{
        marginTop: 15, 
        display: 'flex',
        flexDirection: 'row', 
        gap: 10, 
        marginBottom: 10
    }, 
    searchbtn: {
        backgroundColor: Colors.WHITE, 
        padding: 10, 
        borderRadius: 8, 
    }
})