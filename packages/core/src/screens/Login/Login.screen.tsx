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
import { CheckBox } from 'react-native-elements'

export class Login extends React.Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(()=>{
      this.setState(store.getState());
      // console.log("subscribe store.getState:" + JSON.stringify(store.getState()));
      // console.log("subscribe this.state:" + JSON.stringify(this.state));
    });
    console.log('LOGIN');
    console.log("Login const state:" + JSON.stringify(this.state));
  }

  onPressLogin = async() => {
    if (this.state.loginSuccess) { // should check if email changed
      alert('You have already logged in.');
      console.log('loginpress -- already login go to chat - succeess state:' + this.state.loginSuccess);
      this.props.navigation.navigate('Chat', {
        login: this.state.login,
        password: this.state.password,
      });
      return;
    }
    console.log('pressing login... email:' + this.state.login);
    const user = {
      login: this.state.login,
      password: this.state.password,
    };
  }

  onChangeTextLogin = (login: any) => this.setState({ login });
  onChangeTextPassword = (password: any) => this.setState({ password });

  loginSuccess = () => {
      console.log('loginSucceess: prior to dispatch state:' + this.state.loginSuccess);
      store.dispatch({
        type: "LOGIN",
        payload: { login: this.state.login, }
      });
      console.log('loginSucceess: after dispatch state:' + this.state.loginSuccess);
    };

    loginFailed = () => {
      console.warn('login failed ***');
      alert('Login failed. Please try again.');
    };

render() {
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
        <CheckBox
  title='Click Here'
  checked={true}
/>
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
                routeName={routesMap.landscape.root.path} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
