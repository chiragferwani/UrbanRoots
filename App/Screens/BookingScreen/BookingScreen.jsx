import { View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalApi from '../../Utlis/GlobalApi';
import BusinessListItem from '../BusinessListCategory/BusinessListItem';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function BookingScreen() {
  const navigation = useNavigation();
  const [businessList, setBusinessList]=useState([]);
  const [businessListFood, setBusinessListFood]=useState([]);
  const [businessListTravel, setBusinessListTravel]=useState([]);
  const [businessListHealth, setBusinessListHealth]=useState([]);
  useEffect(()=>{
    getBusinessByCategorySports();
    getBusinessByCategoryFood();
    getBusinessByCategoryTravel();
    getBusinessByCategoryHealth();
  },[])
  const getBusinessByCategorySports=()=>{
    GlobalApi.getBusinessListByCategory('Sports').then(resp=>{
      setBusinessList(resp.businessListsurbanroots);
    })
  }
  const getBusinessByCategoryFood=()=>{
    GlobalApi.getBusinessListByCategory('Food').then(resp=>{
      setBusinessListFood(resp.businessListsurbanroots);
    })
  }
  const getBusinessByCategoryTravel=()=>{
    GlobalApi.getBusinessListByCategory('Travel').then(resp=>{
      setBusinessListTravel(resp.businessListsurbanroots);
    })
  }
  const getBusinessByCategoryHealth=()=>{
    GlobalApi.getBusinessListByCategory('Health').then(resp=>{
      setBusinessListHealth(resp.businessListsurbanroots);
    })
  }

  return (
    <View>
    <ScrollView>
    <View style={{padding:20, paddingTop:30}}>
      <TouchableOpacity style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}
      onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={33} color="black" />
        <Text style={{fontSize:24, fontFamily:'sfpro-bold'}}>Explore</Text>
      </TouchableOpacity>
     <View pointerEvents='none'>
     <View style={{display: 'flex', flexDirection: 'row', padding: 20, marginBottom: -20, gap: 10, marginLeft: -10}}>
     <Ionicons name="game-controller-outline" size={24} color="black" />
     <Text style={{fontSize:20, fontFamily:'sfpro-bold'}}>Sports</Text>
     </View>
     <FlatList
        data={businessList}
        pointerEvents="none"
        disableIntervalMomentum={true}
        style={{marginTop:15}}
        renderItem={({item, index})=>(
          <BusinessListItem business={item}/>
        )}
      />
      <View style={{display: 'flex', flexDirection: 'row', padding: 20, marginBottom: -20, gap: 10, marginLeft: -10}}>
      <Ionicons name="fast-food-outline" size={24} color="black" />
     <Text style={{fontSize:20, fontFamily:'sfpro-bold'}}>Food</Text>
     </View>
      <FlatList
        data={businessListFood}
        pointerEvents="none"
        disableIntervalMomentum={true}
        style={{marginTop:15}}
        renderItem={({item, index})=>(
          <BusinessListItem business={item}/>
        )}
      />
      <View style={{display: 'flex', flexDirection: 'row', padding: 20, marginBottom: -20, gap: 10, marginLeft: -10}}>
      <SimpleLineIcons name="plane" size={24} color="black" />
     <Text style={{fontSize:20, fontFamily:'sfpro-bold'}}>Travel</Text>
     </View>
      <FlatList
        data={businessListTravel}
        pointerEvents="none"
        disableIntervalMomentum={true}
        style={{marginTop:15}}
        renderItem={({item, index})=>(
          <BusinessListItem business={item}/>
        )}
      />
      <View style={{display: 'flex', flexDirection: 'row', padding: 20, marginBottom: -20, gap: 10, marginLeft: -10}}>
      <FontAwesome5 name="hospital" size={24} color="black" />
     <Text style={{fontSize:20, fontFamily:'sfpro-bold'}}>Health</Text>
     </View>
      <FlatList
        data={businessListHealth}
        pointerEvents="none"
        disableIntervalMomentum={true}
        style={{marginTop:15}}
        renderItem={({item, index})=>(
          <BusinessListItem business={item}/>
        )}
      />
     </View>
    </View>
    </ScrollView>
    </View>
  )
}