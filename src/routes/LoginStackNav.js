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
    const [user, setUser] = useState({username:''})

    // if (!authToken) return <LoginScreen />
    const continueLoggedIn = (user) => {
        setUser(user);
        setIsLoggedIn(!isLoggedIn);
    }
    
    return (
        <Stack.Navigator initialRouteName={'Homescreen'}>
            { !isLoggedIn 
                ? (
                    <Stack.Screen name="Loginscreen">
                        { props => <LoginScreen {...props} setUser={continueLoggedIn} />}
                    </Stack.Screen>
                )
                : (
                    <>
                        <Stack.Screen name="Homescreen">
                            { props => <HomeScreen {...props} user={user} /> }
                        </Stack.Screen>
                        <Stack.Screen name="ListaScreen" component={ListaScreen} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default LoginStackNav;