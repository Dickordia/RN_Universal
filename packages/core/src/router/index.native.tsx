import React, { FunctionComponent, useState } from 'react'

import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { routesMap } from '../utils/router'
import { Login as LoginScreen } from '../screens/Login/Login.screen'
import { Landscape as LandscapeScreen } from '../screens/Landscape/Landscape.screen'

const Main = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationNativeContainer>
      <Main.Navigator headerMode={'none'}>
        <Main.Screen
          name={routesMap.login.root.path}
          component={LoginScreen}
          options={{ title: routesMap.login.root.name}}
        />
        <Main.Screen
          name={routesMap.landscape.root.path}
          component={LandscapeScreen}
          options={{ title: routesMap.landscape.root.name }}
        />
      </Main.Navigator>
    </NavigationNativeContainer>
  );
};

const Router = MainNavigator;

export { Router };
