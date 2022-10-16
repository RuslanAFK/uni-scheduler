import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    Add: {
        screen: AddScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
