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

import store from '../../redux/store'
import {loginUser} from '../../api/auth'


export class Login extends React.Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(()=>{
      this.setState(store.getState());
    });
  }

  onLoginPress = (onSuccess: any) => {
    const {login, password} = this.state;

    loginUser(
      login,
      password,
      () => {
        store.dispatch({
          type: "LOGIN",
          payload: {login: login}
        });
        onSuccess();
      },
      () => {
        alert('Login failed. Please try again.');
      }
    );
  };

  // onPressLogin = ({onSuccess}) async() => {
  //   if (isValidCredential(this.state.login, this.state.password)) {
  //     console.log('TRUwfefwwfeE')
  //
  //
  //     return true
  //
  //   } else {
  //     console.log('wkbfejkbfwejkeb')
  //     alert('Login failed. Please try again.');
  //     return false
  //   }

    // if (this.state.loginSuccess) { // should check if email changed
    //   alert('You have already logged in.');
    //   console.log('loginpress -- already login go to chat - succeess state:' + this.state.loginSuccess);
    //   this.props.navigation.navigate('Chat', {
    //     login: this.state.login,
    //     password: this.state.password,
    //   });
    //   return;
    // }
  // }

  onChangeTextLogin = (login: any) => {
    this.setState({ login });
  };

  onChangeTextPassword = (password: any) => {
    this.setState({ password });
  };

  loginSuccess = () => {

  };

  loginFailed = () => {

  };

render() {
    const isCredential = this.state.login.trim() !== '' && this.state.password.trim() !== ''

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
            onChangeText={this.onChangeTextLogin}
            value={this.state.login}
          />
          <TextInput
            style={style.input}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor="#004444"
            secureTextEntry
            onChangeText={this.onChangeTextPassword}
            value={this.state.password}
          />
          <Link text='LOGIN'
                disabled={!isCredential}
                onPress={this.onLoginPress}
                routeName={routesMap.landscape.root.path} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
