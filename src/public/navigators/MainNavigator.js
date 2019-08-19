import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screen/Home";
import Login from "../../screen/Login";
import Register from "../../screen/Register";
// import DetailBook from "../../screen/DetailBook";
// import AddBook from "../../screen/AddBook";
// import Profile from "../../screen/Profile";

const AppNavigator = createStackNavigator({
    Home,
    Login,
    Register,
    // DetailBook,
    // AddBook,
    // Profile,
}, {
    headerMode:'none',
    initialRouteName:'Login'
})

export default createAppContainer(AppNavigator)