import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import LoginScreen from '../screens/LoginScreen';
import PreFormScreen from '../screens/PreFormScreen';
import FormPrecisoAjuda from '../screens/FormPrecisoAjuda';
import FormVouAjudar from '../screens/FormVouAjudar';
import HomeScreen from '../screens/HomeScreen';
import ListaScreen from '../screens/ListaScreen';

import { headerColorTheme } from '../util/constants';

// Cria a 'Stack' de screen
const Stack = createStackNavigator();

const LoginStackNav = (props) => {
    console.log("LoginStackNav props:", props);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({username:''})

    /** Continua a partir do login (in or out) */
    const continueLogInOut = (user) => {
        setUser(user);
        setIsLoggedIn(!isLoggedIn);
    }

    /** Cria a chamada do Login */
    const renderLoginScreen = () => {
        return (
            <>
                <Stack.Screen 
                    name="Loginscreen" 
                    options={{ title: 'Login' }}
                >
                    { props => <LoginScreen {...props} setUser={continueLogInOut} />}
                </Stack.Screen>

                <Stack.Screen 
                    name="PreFormScreen" 
                    options={{ title: 'Ajuda Vovô' }}
                >
                    { props => <PreFormScreen {...props} user={user} logOut={continueLogInOut} /> }
                </Stack.Screen>

                <Stack.Screen 
                    name="FormPrecisoAjuda" 
                    component={FormPrecisoAjuda} 
                    options={{ title: 'Formulário do Idoso'}}
                />
                
                <Stack.Screen 
                    name="FormVouAjudar" 
                    component={FormVouAjudar} 
                    options={{ title: 'Formulário do Ajudante' }}
                />
            </>
        )
    }
    
    /** Cria a pilha a partir da HomeScreen */
    const renderHomeStack = () => {
        return (
            <>
                <Stack.Screen 
                    name="Homescreen" 
                    options={{ 
                        title: 'Ajuda Vovô',
                    }}
                >
                    { props => <HomeScreen {...props} user={user} logOut={continueLogInOut} /> }
                </Stack.Screen>

                <Stack.Screen 
                    name="ListaScreen" 
                    component={ListaScreen}
                />
            </>
        )
    }

    // MAIN RENDER
    return (
        <Stack.Navigator 
            initialRouteName={'Loginscreen'}
            screenOptions={{...standardHeaderTheme}}
        >
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