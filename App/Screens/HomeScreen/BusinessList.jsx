import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utlis/Colors'
import GlobalApi from '../../Utlis/GlobalApi'
import BusinessListItem from './BusinessListItem';
import { useNavigation } from '@react-navigation/native';

export default function BusinessList() {

  const [businessList, setBusinessList]=useState([]);
  const navigation = useNavigation();

  useEffect(()=> {
    getBusinessList();
  },[])

  const getBusinessList=()=>{
    GlobalApi.getBusinessList().then(resp=>{
        console.log(resp);
        setBusinessList(resp.businessListsurbanroots)
    })
  }

  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.heading}>City Buzz</Text>
      <TouchableOpacity onPress={()=> navigation.push('explorescreen')}>
      <Text style={styles.subheading}>View All</Text>
      </TouchableOpacity>
      </View>
      <FlatList
      data={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=>(
        <View style={{marginRight:10}}>
           <BusinessListItem business={item}/>
        </View>
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
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center', 
        justifyContent: 'space-between'
        },
})