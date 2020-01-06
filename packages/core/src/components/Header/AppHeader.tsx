import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native</Text>
      <Text style={styles.text2}>Mobile</Text>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#007777',
  },
  text: {
   fontSize: 28,
   fontWeight: '600',
 },
  text2: {
   fontSize: 36,
   fontWeight: '600',
  }
})
