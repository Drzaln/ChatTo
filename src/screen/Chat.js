import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Button } from 'react-native-paper'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from '../style/Form'
import firebase from 'react-native-firebase'

class Chat extends Component {
  constructor () {
    super()

    this.state = {
      fullname: '',
      email: '',
      password: '',
      errMessage: null,
      spinner: false,
      latitude: null,
      longitude: null,
      datauser: this.props.navigation.getParam('data'),
    }
  }

  render () {
      console.log(`data`, this.state.datauser)
    return (
      <>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle='dark-content'
        />
        <View style={styles.background}>
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
                onChangeText={fullname => this.setState({ fullname })}
                returnKeyType={'next'}
                placeholder='Fullname'
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
                style={styles.inputText}
                placeholder='Password, min 6 characters'
                placeholderTextColor='grey'
                clearTextOnFocus
                secureTextEntry
              />
              <Button
                icon='add'
                mode='contained'
                style={styles.buttonLogin}
              >
                register
              </Button>
            </View>
            <TouchableOpacity
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

export default Chat
