import { View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from "react-native-calendar-picker";
import { makeStyles } from '@mui/styles';
import Colors from '../../Utlis/Colors';
import { useUser } from '@clerk/clerk-expo'
import GlobalApi from '../../Utlis/GlobalApi';

export default function BusinessModal({businessId, hideModal}) {
    const [timeList, setTimeList]=useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();
    const {user} = useUser();
    useEffect(()=>{
        getTime();
    },[])
    const getTime=()=>{
        const timeList=[];
        for(let i=8; i<=12; i++){
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1; i<=7; i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList);
    }

    const createNewBooking=()=>{
        if(!selectedTime || !selectedDate){
            ToastAndroid.show('Please Enter Details', ToastAndroid.LONG)
            return ;
        }
        else{
            ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG);
            hideModal();
        }
    }

  return (
    <ScrollView>
    <KeyboardAvoidingView>
        <View style={{padding:20, display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <Feather name="calendar" size={24} color="black" />
        <Text style={{fontSize:24, fontFamily:'sfpro-bold'}}>Booking</Text>
        </View>
        {/*Calendar Seciton*/}
        <Text style={styles.heading}>Select Date</Text>
        <View style={styles.Calcontainer}>
            <CalendarPicker 
            onDateChange={setSelectedDate} 
            width={340} minDate={Date.now()} 
            todayBackgroundColor={Colors.PRIMARY_LIGHT}
            todayTextStyle={Colors.BLACK}
            selectedDayColor='#98FB98'/>
        </View>
        {/*Time Select Section */}
        <View style={{marginTop: 20}}>
        <Text style={styles.heading}>Select Time Slot</Text>
            <FlatList
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=> (
                    <View style={[selectedTime==item.time?styles.SelectedTime:styles.unSelectedTime]}>
                    <Button
                    onPress={()=>setSelectedTime(item.time)}
                    title={item.time} 
                    color='#8E3FFF'
                    type='outline'
                    ></Button>
                    </View>
                    
                )}
            />
        </View>
        {/*Notes Section */}
        <View style={{paddingTop:20}}>
        <Text style={styles.heading}>Any Suggestions</Text>
        <TextInput placeholder='Notes' onChange={(text)=> setNote(text)} numberOfLines={4} multiline={true} style={styles.noteTextArea}/>
        </View>
        
        {/*Buttons */}
        <View style={{display: 'flex', flexDirection: 'row', gap: 10, padding: 20, alignSelf: 'center'}}>
        <View style={{borderRadius:12, alignSelf:'center', backgroundColor:'#fff'}}>
        <Button onPress={() => createNewBooking()} title="Confirm & Book" color="#0BDA51"
        ></Button>
        </View>
        <View style={{borderRadius:12, alignSelf:'center', backgroundColor:'#fff'}}>
        <Button onPress={() => hideModal()} title="Cancel Booking" color="#DC143C"
        ></Button>
        </View>
        </View>

    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    backbtnContainer:{
        zIndex: 2,
        padding: 20, 
        display: 'flex',
        flexDirection: 'row'
    }, 
    heading:{
        fontFamily: 'sfpro-bold', 
        fontSize: 20, 
        color: Colors.BLACKSHADE, 
        marginLeft: 20, 
        marginBottom: 20
    }, 
    Calcontainer: {
        backgroundColor: Colors.WHITE,
        padding: 10, 
        borderRadius: 15, 
        alignSelf: 'center', 
      },
      SelectedTime:{
        padding: 8, 
        borderWidth: 4, 
        borderColor: '#32CD32',
        borderRadius: 20, 
        paddingHorizontal: 12, 
        margin: 5,
        color: Colors.PRIMARY, 
        marginTop: 0, 
        backgroundColor: Colors.PRIMARY
      }, 
      unSelectedTime:{
        padding: 8, 
        borderWidth: 2, 
        borderColor: Colors.GRAY,
        borderRadius: 20, 
        paddingHorizontal: 12, 
        margin: 5,
        color: Colors.ORCHID, 
        backgroundColor: Colors.PRIMARY,
        marginTop: 0, 
      }, 
      noteTextArea: {
        fontFamily: 'sfpro-bold',
        fontSize: 14,
        borderWidth: 1, 
        borderRadius: 15,
        textAlignVertical: 'top', 
        padding: 20, 
        margin: 15, 
        marginTop: -8, 
      }
})