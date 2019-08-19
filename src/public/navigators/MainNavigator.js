import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screen/Home";
// import Login from "../../screens/Login";
// import Register from "../../screens/Register";
// import DetailBook from "../../screens/DetailBook";
// import AddBook from "../../screens/AddBook";
// import Profile from "../../screens/Profile";

const AppNavigator = createStackNavigator({
    Home,
    // Login,
    // Register,
    // DetailBook,
    // AddBook,
    // Profile,
}, {
    headerMode:'none',
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator)