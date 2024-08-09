import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utlis/GlobalApi'
import Colors from '../../Utlis/Colors';

export default function Slider() {
  const [slider, setSlider]=useState([]);
  useEffect(() =>{
    getSliders();
  },[])

  const getSliders=()=>{
    GlobalApi.getSlider().then(resp=>{
        console.log("resp",resp.slidersurbanroots);
        setSlider(resp.slidersurbanroots)
    })
  }
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.heading}>Offers For You</Text>
      <Text style={styles.subheading}>View All</Text>
      </View>
     <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=> (
            <View style={{marginRight:20, backgroundColor:Colors.WHITE, borderRadius:10}}>
                <Image source={{uri:item.image?.url}} style={styles.sliderImage}/>
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
    sliderImage:{
        width: 270, 
        height: 150, 
        borderRadius: 20, 
        objectFit: 'contain'
    },
    container:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center', 
        justifyContent: 'space-between'
        },
})