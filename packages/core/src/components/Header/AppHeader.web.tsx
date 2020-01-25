import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import {Link} from '../../components/Link'
import {routesMap} from '../../utils/router'
import store from '../../redux/store'

export default  function AppHeader() {
  const aState = store.getState();

  return (
    <View style={{height: 60,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#003333',
                  justifyContent: 'space-between'}}>
      <View>
        <Image resizeMode='contain'
               style={styles.logo}
               source={require('../../assets/img/login_logo.png')}
        />
      </View>
      <Text style={styles.text}>Welcome to React Native Web</Text>
      <Text style={styles.text}>{aState.login}</Text>
      <View style={{paddingRight:30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Link text='LOGOUT'
                routeName={routesMap.login.root.path} />
          <Link text='ABOUT'
                routeName={routesMap.about.root.path} />
      </View>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  logo: {
    width: 180,
    height: 50,
  },
  text: {
    color: '#708090',
    fontSize: 36,
    fontWeight: '600',
  }
})
