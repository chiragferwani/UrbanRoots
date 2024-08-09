import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useAuth, useOAuth } from '@clerk/clerk-expo';
import Colors from '../../Utlis/Colors'
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"});
  const onPress = React.useCallback(async () => {
    try{
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
      if (createdSessionId){
        setActive({session: createdSessionId});
      } else{
        // Use Sign In Sign Up for next steps such as MFA
      }
    } catch(err){
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:27, fontFamily:'sfpro-bold', color:Colors.WHITE, fontWeight:'bold', textAlign:'center'}}>
          Find Your Tribe,
        </Text>
        <Text style={{fontSize:27, fontFamily:'sfpro-bold', color:Colors.WHITE, fontWeight:'bold', textAlign:'center'}}>
          Wherever You Go
        </Text>
        <Text style={{fontSize:17, fontFamily:'sfpro-med', color:Colors.WHITE, textAlign:'justify', marginTop:25}}>
        Welcome to UrbanRoots - Connect with local groups and events, find your community, and build friendships in your new city.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{textAlign:'center', fontFamily:'sfpro-bold', fontWeight:'bold', fontSize:20, color:Colors.PRIMARY}}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:230, 
    height:450, 
    marginTop:70, 
    borderWidth:4,
    borderColor:Colors.BLACK, 
    borderRadius:15,
  },
  subContainer: {
    width:'100%',
    backgroundColor: Colors.PRIMARY, 
    height:'70%',
    marginTop: -20, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    padding: 20
  },
  button: {
    padding: 15,
    backgroundColor:Colors.WHITE, 
    borderRadius: 99, 
    marginTop: 60,
  }

})