import firebase from 'react-native-firebase'
const db = firebase.firestore()

function checkAndCreateRoom (friendId) {
  const currentUserId = firebase.auth().currentUser.uid
  const users = { [friendId]: true, [currentUserId]: true }

  console.log(`users ==> `, users)
}

export { checkAndCreateRoom }
