import React from 'react'
import {Router} from './router';
import {StatusBar, SafeAreaView} from 'react-native';

export function App() {
  return (
    <>
    <StatusBar hidden={true}/>
    <SafeAreaView style={{flex: 1, backgroundColor: '#2c3e5A'}}>
      <Router />
    </SafeAreaView>
    </>
  );
};
