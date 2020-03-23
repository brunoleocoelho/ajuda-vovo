import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Navigators
import LoginStackNav from './LoginStackNav';

/**
 * COMPONENTE PONTO DE PARTIDA DO APP, QUE SERÁ 
 * COLOCADO O NAVIGATOR PARA TROCA DE TELAS.
 * 
 */
const Router = () => {
    return (
        <NavigationContainer>

            <LoginStackNav />

        </NavigationContainer>
    )
}

export default Router;


/*
Navegação entre telas no React Native com React Navigation V3
https://blog.rocketseat.com.br/react-navigation-react-native/

Tipos de navegação no React Native
https://blog.rocketseat.com.br/navegacao-react-native/

Authentication flows
https://reactnavigation.org/docs/auth-flow

Moving between screens
https://reactnavigation.org/docs/navigating

*/