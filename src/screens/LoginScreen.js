import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import { stdFontSizes, headerColorTheme } from '../util/constants';

const LoginScreen = (props) => {
    // PROPS
    console.log("--- LoginScreen props: ", props);
    const { navigation, logIn } = props;

    // STATE
    const [userName, setUserName] = useState('');
    const [pw, setPW] = useState('');

    // Functions
    const doLogin = () => {
        if (userName.length && pw.length) {
            props.setUser({userName});
        }
        else {
            alert('Usuário e senha devem ser preenchidos!')
        }
    }

    const imgVovo = require('../../assets/vovo-face.png');

    return (
        <KeyboardAvoidingView 
            behavior='position'
            contentContainerStyle={styles.mainContainer}
            style={styles.mainContainer}
        >
            <View style={styles.titleContainer}>
                <Image source={imgVovo} style={styles.vovoImage} />
                <Text style={styles.textTitle}>Ajuda Vovô</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Username ou E-mail'
                    val={userName}
                    onChangeText={setUserName}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoFocus 
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    val={pw}
                    onChangeText={setPW}
                    keyboardType='default'
                    secureTextEntry
                    autoCapitalize='none'
                />

                <TouchableOpacity 
                    onPress={doLogin} 
                    style={styles.buttonLogin}
                >
                    <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity>
            </View>
     
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
    },
    titleContainer: {
        alignItems: 'center',
        padding: 12,
    },
    formContainer: {
        padding: 12,
    },
    vovoImage: {
        width: 160,
        height: 160,
        margin: 4,
    },
    textTitle: {
        fontSize: stdFontSizes.xXLarge,
        color: headerColorTheme.backgroundColor,
        fontWeight: 'bold',
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        padding: 12,
        marginVertical: 8,
        borderRadius: 4
    },
    buttonLogin: {
        padding: 12, 
        backgroundColor: headerColorTheme.backgroundColor,
        borderRadius: 4
    },
    buttonText: {
        color: headerColorTheme.color,
        textAlign: 'center',
        fontSize: stdFontSizes.xLarge
    }
})

export default LoginScreen
