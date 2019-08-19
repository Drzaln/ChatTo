import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Appbar, FAB } from 'react-native-paper'
import MapView from 'react-native-maps'

export default class Home extends Component {
  render () {
    console.log(this.state)
    return (
      <>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0.05)'
          barStyle='default'
        />
        <View style={{ flex: 1 }}>
          <FAB
            color='#589167'
            style={styles.fab}
            small
            icon='arrow-back'
            onPress={() => console.log('Pressed')}
          />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
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
              icon='menu'
              onPress={() => console.log('Pressed delete')}
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
  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    top: '3%',
    backgroundColor: 'white',
    color: '#589167'
  }
})
