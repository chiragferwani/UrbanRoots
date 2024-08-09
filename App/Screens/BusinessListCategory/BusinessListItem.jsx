import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utlis/Colors'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('businessdetail', 
    {
      business: business
    })
    }>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}
      />
      <View style={styles.subcontainer}>
        <Text style={{fontFamily:'sfpro-bold', fontSize:15, color:Colors.GRAY}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'sfpro-bold', fontSize:19, color:Colors.BLACK}}>{business.name}</Text>
        <Text style={{fontFamily:'sfpro-bold', fontSize:14, color:Colors.BLACKSHADE}}>
        <Entypo name="location" size={20} color={Colors.PRIMARY} style={{marginRight:10}}/>  {business.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius: 15
    }, 
    container:{
        padding: 10, 
        backgroundColor: Colors.WHITE, 
        borderRadius: 15,
        marginBottom: 15, 
        display: 'flex', 
        flexDirection: 'row', 
        gap:10
    }, 
    subcontainer:{
        display: 'flex',
        gap: 8
    }
})