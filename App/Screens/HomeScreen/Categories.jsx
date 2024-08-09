import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utlis/GlobalApi'
import Colors from '../../Utlis/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const [categories, setCategories]=useState([]);
    const navigation = useNavigation()
    useEffect(()=> {
        getCategories();
    },[])

    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            console.log("resp",resp.categoryurbanroots);
            setCategories(resp?.categoryurbanroots); 
        })
    }

  return (
    <View>
        <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <TouchableOpacity onPress={()=> navigation.push('explorescreen')}>
      <Text style={styles.subheading}>View All</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({item, index}) =>index<=3&& (
            <TouchableOpacity style={{flex:1, alignItems:'center'}}
            onPress={()=>navigation.push('businesslist', {
                category: item.name
            })}
            >
                <View style={styles.iconContainer}>
                    <Image source={{uri:item.icon?.url}} style={{width:40, height:40}}/>
                </View>
                <Text style={{fontFamily:'sfpro-bold', marginTop:5}}>{item?.name}</Text>
            </TouchableOpacity>
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
    subheading:{
        fontFamily: 'sfpro-bold', 
        fontSize: 16, 
        marginBottom: 10,
        color: Colors.BLACKSHADE
    }, 
    container:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center', 
        justifyContent: 'space-between'
        },
    iconContainer: {
        backgroundColor: Colors.LIGHTGRAY,
        padding: 17, 
        borderRadius: 99
    }
})