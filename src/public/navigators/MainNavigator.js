// import { createStackNavigator, createAppContainer } from "react-navigation";
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Home from '../../screen/Home'
import Login from '../../screen/Login'
import Register from '../../screen/Register'
import Loading from '../../screen/Loading'
import Chat from '../../screen/Chat'
// import Profile from "../../screen/Profile";

const AppNavigator = createSwitchNavigator(
  {
    Loading,
    Home,
    Login,
    Register,
    Chat
    // Profile,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Chat'
  }
)

export default createAppContainer(AppNavigator)
