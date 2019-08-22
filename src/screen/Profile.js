import React, { Component } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native'
import { IconButton, Headline, Caption } from 'react-native-paper'
import firebase from 'react-native-firebase'

class Profile extends Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 8
        }}
      >
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <View style={{ flexDirection: 'row', position: 'absolute' }}>
          <View>
            <IconButton
              icon='arrow-back'
              color='#589167'
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}
          >
            <Text
              text10
              style={{ color: '#207561', fontWeight: 'bold', fontSize: 18 }}
            >
              Profile
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', top: '12%' }}>
          <View style={{ marginRight: 8 }}>
            <TouchableOpacity onPress={() => console.warn('kepencet')}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 16
                }}
                source={{
                  uri: firebase.auth().currentUser.photoURL
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Headline>{firebase.auth().currentUser.displayName}</Headline>
            <Caption>{firebase.auth().currentUser.email}</Caption>
          </View>
        </View>
      </View>
    )
  }
}

export default Profile
