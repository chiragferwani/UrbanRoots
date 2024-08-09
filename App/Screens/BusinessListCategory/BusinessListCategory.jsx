import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalApi from '../../Utlis/GlobalApi';
import BusinessListItem from './BusinessListItem';

export default function BusinessListCategory() {
  const param=useRoute().params;
  const navigation = useNavigation();
  const [businessList, setBusinessList]=useState([])
  useEffect(()=>{
    console.log("Category", param.category);
    param&&getBusinessByCategory();
  },[param])
  const getBusinessByCategory=()=>{
    GlobalApi.getBusinessListByCategory(param.category).then(resp=>{
      setBusinessList(resp.businessListsurbanroots);
    })
  }
  return (
    <View style={{padding:20, paddingTop:30}}>
      <TouchableOpacity style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}
      onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={33} color="black" />
        <Text style={{fontSize:24, fontFamily:'sfpro-bold'}}>{param.category}</Text>
      </TouchableOpacity>
      <FlatList
        data={businessList}
        style={{marginTop:15}}
        renderItem={({item, index})=>(
          <BusinessListItem business={item}/>
        )}
      />
    </View>
  )
}