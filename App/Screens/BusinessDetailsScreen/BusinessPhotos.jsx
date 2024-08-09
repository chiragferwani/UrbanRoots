import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utlis/Colors'

export default function BusinessPhotos({business}) {
  return (
    <View>
      <Text style={styles.heading}>Photos</Text>
      <FlatList
        data={business.images}
        numColumns={2}
        renderItem={({item})=>(
            <Image source={{uri:item.url}} 
            style={{
                width:'100%', 
                flex:1, 
                height:120, 
                borderRadius:15, 
                margin:7, 
                backgroundColor: Colors.WHITE
            }}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontFamily: 'sfpro-bold', 
        fontSize: 20, 
        marginBottom: 10,
        color: Colors.BLACKSHADE
    }, 
})