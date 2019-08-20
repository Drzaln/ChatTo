import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper'
import Spinner from 'react-native-loading-spinner-overlay'
import firebase from 'react-native-firebase'
import styles from '../style/Form'

class Login extends Component {
  state = {
    user: [],
    email: '',
    password: '',
    errMessage: null,
    spinner: false
  }

  login = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => alert('Wrong Password'))
  }

  render () {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0)'
          barStyle='dark-content'
        />
        <View style={styles.background}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={{ color: '#fff' }}
          />
          <View style={styles.body}>
            <View
              style={{
                paddingHorizontal: 16,
                alignItems: 'flex-end'
              }}
            >
              <View style={{ alignItems: 'flex-start', width: '100%' }}>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <TextInput
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                onChangeText={email => this.setState({ email })}
                // value={this.state.email}
                returnKeyType={'next'}
                placeholder='Email'
                autoCompleteType='email'
                keyboardType='email-address'
                placeholderTextColor='grey'
                clearTextOnFocus
                autoFocus
              />
              <TextInput
                ref={input => {
                  this.secondTextInput = input
                }}
                onChangeText={password => this.setState({ password })}
                // value={this.state.password}
                style={styles.inputText}
                placeholder='Password'
                placeholderTextColor='grey'
                clearTextOnFocus
                secureTextEntry
              />
              <Button
                icon='chevron-right'
                mode='contained'
                onPress={this.login}
                style={styles.buttonLogin}
              >
                login
              </Button>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}
              style={{ alignItems: 'flex-end', marginTop: 16 }}
            >
              <Text style={{ color: 'grey' }}>
                Don't have account? Sign up here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default Login
