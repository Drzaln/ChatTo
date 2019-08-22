import React, { Component } from 'react'
import {
  View,
  StatusBar,
  BackHandler,
  StyleSheet
} from 'react-native'
import { Button, FAB, IconButton, Appbar } from 'react-native-paper'
import { GiftedChat } from 'react-native-gifted-chat'
import { withNavigation } from 'react-navigation'
import firebase from 'react-native-firebase'

const db = firebase.database()

class Chat extends Component {
  constructor () {
    super()

    this.state = {
      messages: [],
      text: '',
      currentUser: [],
      room: []
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentDidMount () {
    const { currentUser } = firebase.auth()
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    )

    db.ref('messages')
      .child(firebase.auth().currentUser.uid)
      .child(this.props.navigation.state.params.friendId)
      .on('child_added', value => {
        this.setState(prevState => {
          return {
            messages: GiftedChat.append(prevState.messages, value.val())
          }
        })
      })
  }

  sendMessage = () => {
    if (this.state.text.length > 0) {
      let msgId = db
        .ref('messages')
        .child(firebase.auth().currentUser.uid)
        .child(this.props.navigation.state.params.friendId)
        .push().key
      let updates = {}
      let message = {
        _id: msgId,
        text: this.state.text,
        createdAt: new Date(),
        user: {
          _id: firebase.auth().currentUser.uid,
          fullname: firebase.auth().currentUser.displayName,
          avatar: firebase.auth().currentUser.photoURL
        }
      }

      updates[
        'messages/' +
          firebase.auth().currentUser.uid +
          '/' +
          this.props.navigation.state.params.friendId +
          '/' +
          msgId
      ] = message
      updates[
        'messages/' +
          this.props.navigation.state.params.friendId +
          '/' +
          firebase.auth().currentUser.uid +
          '/' +
          msgId
      ] = message

      db.ref().update(updates)
      this.setState({ text: '' })
    }
  }

  componentWillUnmount () {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    )
  }

  handleBackButtonClick () {
    this.props.navigation.navigate('Home')
    return true
  }

  render () {
    return (
      <>
        <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
        <View style={styles.background}>
          <GiftedChat
            text={this.state.text}
            messages={this.state.messages}
            onSend={this.sendMessage}
            user={{
              _id: firebase.auth().currentUser.uid,
              fullname: firebase.auth().currentUser.displayName,
              avatar: firebase.auth().currentUser.photoURL
            }}
            onInputTextChanged={value => this.setState({ text: value })}
            isLoadingEarlier
            isAnimated
          />
          <Appbar style={styles.top} dark>
            <Appbar.Action
              color='#589167'
              icon='arrow-back'
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Appbar.Content
              titleStyle={{ color: '#207561' }}
              title={this.props.navigation.state.params.friendName}
            />
          </Appbar>
        </View>
      </>
    )
  }
}

export default withNavigation(Chat)

const styles = StyleSheet.create({
  fabBack: {
    position: 'absolute',
    margin: 16,
    left: 0,
    top: '4%',
    backgroundColor: 'white',
    color: '#589167'
  },
  background: {
    backgroundColor: '#E6E6E6',
    height: '100%'
  },
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#ffffff',
    elevation: 0
  }
})
