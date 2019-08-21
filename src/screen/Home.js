import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, BackHandler } from 'react-native'
import { Appbar, FAB } from 'react-native-paper'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import GetLocation from 'react-native-get-location'
import firebase from 'react-native-firebase'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mapRegion: null,
      latitude: 0,
      longitude: 0,
      currentUser: [],
      user: []
    }
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
  }

  componentDidMount = async () => {
    await this.currentPosition()
    const { currentUser } = firebase.auth()

    this.setState({ currentUser, user: firebase.auth().currentUser.providerData[0] })
  }

  currentPosition () {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    })
      .then(location => {
        let region = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5
        }

        this.setState({
          mapRegion: region,
          latitude: location.latitude,
          longitude: location.longitude
        })
      })
      .catch(error => {
        const { code, message } = error
      })
  }

  render () {
    console.log(`user`, this.state.user.email)
    return (
      <>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0.05)'
          barStyle='default'
        />
        <View style={{ flex: 1 }}>
          <MapView
            showsCompass={false}
            showsUserLocation
            followsUserLocation
            showsMyLocationButton={false}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.mapRegion}
          >
            {/* <Marker
              onPress={() => console.warn('terpencet')}
              draggable
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              title='fullname'
              description="hey i'm here!"
            /> */}
          </MapView>
          <FAB
            color='#589167'
            style={styles.fabBack}
            small
            icon='arrow-back'
            onPress={() => BackHandler.exitApp()}
          />
          {this.state.latitude === 0 ? (
            <FAB
              small
              color='#589167'
              style={styles.fabLoc}
              icon='location-searching'
              onPress={() => {}}
            />
          ) : (
            <FAB
              small
              color='#589167'
              style={styles.fabLoc}
              icon='my-location'
              onPress={() => this.currentPosition()}
            />
          )}
        </View>
        <View>
          <Appbar style={styles.bottom}>
            <Appbar.Action
              color='#589167'
              icon='account-circle'
              onPress={() => console.log('Pressed archive')}
            />
            <Appbar.Content
              titleStyle={{ color: '#207561' }}
              style={{ alignItems: 'center' }}
              //   title='ChatTo'
              title='ChatTo'
            />
            <Appbar.Action
              color='#589167'
              icon='exit-to-app'
              onPress={() => this.logout()}
            />
          </Appbar>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
  fabBack: {
    position: 'absolute',
    margin: 16,
    left: 0,
    top: '4%',
    backgroundColor: 'white',
    color: '#589167'
  },
  fabLoc: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: '4%',
    backgroundColor: 'white',
    color: '#589167'
  }
})
