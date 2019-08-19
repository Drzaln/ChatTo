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
import styles from "../style/Form";

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: [],
      email: '',
      password: '',
      spinner: false
    }
  }

  render () {
    const loginAction = () => {
      this.setState({
        spinner: true
      })
      this.state.user.push({
        email: this.state.email,
        password: this.state.password
      })
      loginuser()
    }
    let loginuser = async () => {
      await this.props
        .dispatch(login(this.state.user[0]))
        .then(() => {
          this.setState({
            spinner: false
          })
          this.props.navigation.push('Home')
        })
        .catch(err => {
          this.setState({
            spinner: false
          })
          alert('Gagal ' + err)
        })
    }

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
                style={styles.inputText}
                placeholder='Password'
                placeholderTextColor='grey'
                clearTextOnFocus
                secureTextEntry
              />
              <Button
                icon='chevron-right'
                mode='contained'
                // onPress={loginAction}
                onPress={() => this.props.navigation.navigate('Home')}
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