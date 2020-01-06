import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import style from './Login.style';
import {Link} from '../../components/Link'
import {routesMap} from '../../utils/router'

export function Login() {
    const aSize = Dimensions.get('window');
    const aWidth = Math.min(aSize.width, aSize.height);
    const aHeight = Math.max(aSize.width, aSize.height);

    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <View style={style.loginContainer}>
          <Image
            resizeMode="contain"
            style={style.logo}
            source={require('../../assets/img/login_logo.png')}
          />
        </View>

        <View style={style.loginContainer}>
          <TextInput
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder='Login'
            placeholderTextColor="#003333"
          />
          <TextInput
            style={style.input}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor="#004444"
            secureTextEntry
          />
          <Link style={style.buttonContainer}
                routeName={routesMap.landscape.root.path}>
            <Text style={style.buttonText}>LOGIN</Text>
          </Link>
        </View>
      </KeyboardAvoidingView>
    );
}
