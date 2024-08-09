import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading(text, isViewAll=false) {
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontFamily: 'sfpro-bold', 
        fontSize: 20, 
        marginBottom: 10
    }, 
})