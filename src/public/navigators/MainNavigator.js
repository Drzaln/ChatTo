// import { createStackNavigator, createAppContainer } from "react-navigation";
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Home from '../../screen/Home'
import Login from '../../screen/Login'
import Register from '../../screen/Register'
import Loading from '../../screen/Loading'
import Chat from '../../screen/Chat'

const AppNavigator = createSwitchNavigator(
  {
    Loading,
    Home,
    Login,
    Register,
    Chat
  },
  {
    headerMode: 'none',
    initialRouteName: 'Loading'
  }
)

export default createAppContainer(AppNavigator)
