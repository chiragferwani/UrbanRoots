import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utlis/Colors'

export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'sfpro-bold', fontSize:17}}>{business?.name}</Text>
        <Text style={{fontFamily:'sfpro-bold', fontSize:13, color:Colors.GRAY}}>{business?.contactPerson}</Text>
        <Text style={{fontFamily:'sfpro-bold', fontSize:10, padding:3, color:Colors.BLACKSHADE, backgroundColor:Colors.PRIMARY_LIGHT, borderRadius:3, alignSelf:'flex-start', paddingHorizontal:7}}>{business?.category.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 160, 
        height: 100, 
        borderRadius: 10,
    }, 
    container:{
        padding: 10,
        backgroundColor: Colors.WHITE, 
        borderRadius: 10,
    },
    infoContainer:{
      display: 'flex',
      gap:3
    }
})