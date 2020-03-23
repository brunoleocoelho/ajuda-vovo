import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen';
import ListaScreen from '../screens/ListaScreen';
import LoginScreen from '../screens/LoginScreen';

// Cria a 'Stack' de screen
const Stack = createStackNavigator();

const LoginStackNav = (props) => {
    console.log("LoginStackNav props:", props);
    const { authToken } = props;
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if (!authToken) return <LoginScreen />
    const goLogIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    
    return (
        <Stack.Navigator initialRouteName={'Homescreen'}>
            { !isLoggedIn 
                ? (
                    <Stack.Screen name="Loginscreen">
                        {props => <LoginScreen {...props} logIn={goLogIn} />}
                    </Stack.Screen>
                )
                : (
                    <>
                    <Stack.Screen name="Homescreen" component={HomeScreen} />
                    <Stack.Screen name="ListaScreen" component={ListaScreen} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default LoginStackNav;