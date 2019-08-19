import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Button } from 'react-native-paper'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from '../style/Form'
import firebase from 'react-native-firebase'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errMessage: null,
    spinner: false
  }

  register = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errMessage: error.message}))
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
                <Text style={styles.loginText}>Register</Text>
              </View>
              <TextInput
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.firstTextInput.focus()
                }}
                onChangeText={username => this.setState({ username })}
                // value={this.state.username}
                returnKeyType={'next'}
                placeholder='Username'
                placeholderTextColor='grey'
                clearTextOnFocus
                autoFocus
              />
              <TextInput
                ref={input => {
                  this.firstTextInput = input
                }}
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                onChangeText={email => this.setState({ email })}
                // value={this.state.email}
                returnKeyType={'next'}
                keyboardType='email-address'
                placeholder='Email'
                placeholderTextColor='grey'
                clearTextOnFocus
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
                icon='add'
                mode='contained'
                onPress={() => this.register()}
                style={styles.buttonLogin}
              >
                register
              </Button>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{ alignItems: 'flex-end', marginTop: 16 }}
            >
              <Text style={{ color: 'grey' }}>
                Already have account? Please login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default Register
