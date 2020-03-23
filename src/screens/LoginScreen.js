import React from 'react'
import { View, Text, Button } from 'react-native'

const LoginScreen = (props) => {

    console.log("--- LoginScreen props: ", props);

    const { navigation, logIn } = props;

    return (
        <View style={{flex: 1, justifyContent:'center'}}>
            <Text>LOGIN SCREEN</Text>
            <Button title="Go Home" onPress={() => logIn('Homescreen')} />
        </View>
    )
}

export default LoginScreen
