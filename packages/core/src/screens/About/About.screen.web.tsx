import React from 'react';
import {View, Text} from 'react-native';

import {Link} from '../../components/Link'
import {routesMap} from '../../utils/router'

import AppHeader from '../../components/Header/AppHeader'

export function About() {
  return (
    <>
      <AppHeader/>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>About</Text>
      </View>
    </>
  );
}
