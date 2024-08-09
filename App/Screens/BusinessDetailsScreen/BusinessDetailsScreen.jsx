import { View, Text, Image, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../Utlis/Colors';
import BusinessPhotos from './BusinessPhotos';
import BusinessModal from './BusinessModal';

export default function BusinessDetailsScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(param.business);
    const [showModal, setShowModal]=useState(false);
    const navigation = useNavigation();
    const [isReadMore, setIsReadMore]=useState(false);

    useEffect(()=>{
    },[])

    const onMessageBtnClick=()=>{
        Linking.openURL('mailto:'+business?.email+"?subject=I Am Looking Forward To Connect With Your Service")
    }

  return (
    <View>
    <ScrollView style={{height:'88%'}}>
        <TouchableOpacity style={styles.backbtnContainer} onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle-outline" size={33} color="black" />
         </TouchableOpacity>
        <Image source={{uri:business?.images[0]?.url}}
            style={styles.bannerImage}
        />
        <View style={styles.infoContainer}>
            <Text style={{fontFamily:'sfpro-bold', fontSize:25}}>{business?.name}</Text>
            <View style={styles.subContainer}>
                <Text style={{fontFamily:'sfpro-bold', color:Colors.BLACKSHADE, fontSize:16}}>{business?.contactPerson} 🌟</Text>
                <Text style={{color:Colors.PRIMARY, backgroundColor:Colors.PRIMARY_LIGHT, padding: 5, borderRadius: 5, fontSize:12}}>{business?.category.name}</Text>
            </View>
            <Text style={{fontFamily:'sfpro-bold', fontSize:14, alignItems:'center'}}>
                <Entypo name="location" size={20} style={{color:Colors.PRIMARY}} />  {business.address}
            </Text>
            {/*Horizontal Line */}
            <View style={{borderWidth:0.8, borderColor:Colors.GRAY, marginTop:10, marginBottom:10}}></View>
             {/*About Section */}
             <View>
             <Text style={styles.heading}>About</Text>
             <Text style={{fontFamily:'sfpro-bold', fontSize:14, lineHeight:25, textAlign:'justify'}} numberOfLines={isReadMore?10:4}>{business.about}</Text>
             <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
             <Text style={{color:Colors.PRIMARY, fontSize:14, fontFamily:'sfpro-bold'}}>{isReadMore?'Read Less': 'Read More'}</Text>
             </TouchableOpacity>
             </View>
             {/*Horizontal Line */}
            <View style={{borderWidth:0.8, borderColor:Colors.GRAY, marginTop:10, marginBottom:10}}></View>
            <BusinessPhotos business={business}/>
        </View>
    </ScrollView>
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 5, 
        gap: 10, 
        alignItems: 'center',
        alignSelf: 'center',
    }}>
        <TouchableOpacity style={styles.messageBtn} onPress={()=>onMessageBtnClick()}>
            <Text style={{textAlign:'center', fontFamily:'sfpro-bold', color:Colors.BLACKSHADE, fontSize:16}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn} onPress={()=> setShowModal(true)}>
            <Text style={{textAlign:'center', fontFamily:'sfpro-bold', color:Colors.BLACKSHADE, fontSize:16}}>Book Now</Text>
        </TouchableOpacity>
    </View>
    <Modal
    animationType='slide'
    visible={showModal}
    >
        <BusinessModal 
        businessId={business.id}
        hideModal={()=> setShowModal(false)}/>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    backbtnContainer:{
        position: 'absolute',
        zIndex: 2,
        padding: 20, 
        position: 'absolute'
    }, 
    heading:{
        fontFamily: 'sfpro-bold', 
        fontSize: 20, 
        marginBottom: 10,
        color: Colors.BLACKSHADE
    }, 
    bannerImage: {
        width: '90%', 
        height: 250, 
        alignSelf: 'center', 
        borderRadius: 20, 
        backgroundColor: Colors.WHITE, 
        marginTop: 60
    }, 
    infoContainer: {
        padding: 20, 
        display: 'flex',
        gap: 7
    }, 
    subContainer:{
        display: 'flex',
        flexDirection: 'row', 
        gap: 5, 
        alignItems: 'center',
    },
    messageBtn:{
        padding:15, 
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderBlockColor: Colors.PRIMARY,
        borderRadius: 99, 
        width: 170
        
    }, 
    bookingBtn:{
        padding:15, 
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderBlockColor: Colors.PRIMARY,
        borderRadius: 99, 
        width: 170
    }
})