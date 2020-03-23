import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen';
import ListaScreen from '../screens/ListaScreen';
import LoginScreen from '../screens/LoginScreen';

import { headerColorTheme } from '../util/constants';

// Cria a 'Stack' de screen
const Stack = createStackNavigator();

const LoginStackNav = (props) => {
    console.log("LoginStackNav props:", props);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({username:''})

    /** Continua a partir do login (in or out) */
    const continueLoggedIn = (user) => {
        setUser(user);
        setIsLoggedIn(!isLoggedIn);
    }

    /** Cria a chamada do Login */
    const renderLoginScreen = () => {
        return (
            <Stack.Screen 
                name="Loginscreen" 
                options={{ 
                    title: 'Login',
                    ...standardHeaderTheme
                }}
            >
                { props => <LoginScreen {...props} setUser={continueLoggedIn} />}
            </Stack.Screen>
        )
    }
    
    /** Cria a pilha a partir da HomeScreen */
    const renderHomeStack = () => {
        return (
            <>
                <Stack.Screen 
                    name="Homescreen" 
                    options={{ 
                        title: 'Ajuda Vovô - HOME',
                        ...standardHeaderTheme
                    }}
                >
                    { props => <HomeScreen {...props} user={user} /> }
                </Stack.Screen>

                <Stack.Screen 
                    name="ListaScreen" 
                    component={ListaScreen}
                    options={{
                        ...standardHeaderTheme
                    }} 
                />
            </>
        )
    }

    // MAIN RENDER
    return (
        <Stack.Navigator initialRouteName={'Homescreen'}>
            { !isLoggedIn 
                ? renderLoginScreen()
                : renderHomeStack()
            }
        </Stack.Navigator>
    )
}

/** Background e color (font) padrão para headers */
const standardHeaderTheme = {
    headerStyle: { 
        backgroundColor: headerColorTheme.backgroundColor
    },
    headerTintColor: headerColorTheme.color
}


export default LoginStackNav;