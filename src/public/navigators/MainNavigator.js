// import { createStackNavigator, createAppContainer } from "react-navigation";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Home from "../../screen/Home";
import Login from "../../screen/Login";
import Register from "../../screen/Register";
import Loading from "../../screen/Loading";
// import DetailBook from "../../screen/DetailBook";
// import AddBook from "../../screen/AddBook";
// import Profile from "../../screen/Profile";

const AppNavigator = createSwitchNavigator({
    Loading,
    Home,
    Login,
    Register,
    // DetailBook,
    // AddBook,
    // Profile,
}, {
    headerMode:'none',
    initialRouteName:'Loading'
})

export default createAppContainer(AppNavigator)