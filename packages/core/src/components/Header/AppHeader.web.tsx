import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default  function AppHeader() {
  return <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Web</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#003333',
  },
  text: {
    color: '#708090',
    fontSize: 36,
    fontWeight: '600',
  }
})
