import React, { useState } from 'react'
import { 
    View, StyleSheet, Text, TextInput, 
    TouchableOpacity, KeyboardAvoidingView, Image, Alert 
} from 'react-native'
import { Button } from 'react-native-elements'

import { stdFontSizes, headerColorTheme, textoInicial } from '../util/constants';

const LoginScreen = (props) => {
    // PROPS
    console.log("--- LoginScreen props: ", props);
    const { navigation, logIn } = props;

    // STATE
    const [userName, setUserName] = useState('');
    const [pw, setPW] = useState('');

    // Functions
    /** Efetua a entrada no app */
    const doLogin = () => {
        if (userName.length && pw.length) {
            props.setUser({userName});
        }
        else {
            alert('Usuário e senha devem ser preenchidos!')
        }
    }

    /** About estilo 'Help' simples */
    const showAbout = () => {
        Alert.alert( 'Sobre este app', textoInicial )
    }

    /** Vai para tela de cadastro */
    const goFormRegister = () => {
        navigation && navigation.navigate('PreFormScreen')
    }

    // Propriedades e Opções 
    const imgVovo = require('../../assets/vovo-face.png');

    // Definindo botão direito do header
    navigation && navigation.setOptions({
        headerRight: () => (
            <Button 
                // title='Sobre'
                titleStyle={{ color: 'white'}}
                icon={{ name: 'help-outline', color: 'white' }} 
                type='clear' 
                containerStyle={{ backgroundColor:'transparent' }} 
                onPress={showAbout}
            />
        ),
    })

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
                    placeholder='Usuário ou E-mail'
                    val={userName}
                    onChangeText={setUserName}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    // autoFocus 
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Senha'
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
                    <Text style={styles.buttonText}>Entrar</Text> 
                </TouchableOpacity>

                <Button 
                    type='clear'
                    title='Ainda não sou cadstrado'
                    containerStyle={ styles.clearButtonContainer }
                    titleStyle={ styles.clearButtonText } 
                    onPress={goFormRegister}
                />
            </View>
     
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
    },

    // logo e texto
    titleContainer: {
        alignItems: 'center',
        padding: 12,
    },
    vovoImage: {
        width: 140,
        height: 140,
        margin: 4,
    },
    textTitle: {
        fontSize: stdFontSizes.xXLarge,
        color: headerColorTheme.backgroundColor,
        fontWeight: 'bold',
    },

    // Inputs
    formContainer: {
        padding: 12,
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#AAA',
        backgroundColor: '#FFF',
        padding: 8,
        marginVertical: 8,
        borderRadius: 8,
        fontSize: stdFontSizes.xLarge
    },

    // botão de entrar
    buttonLogin: {
        padding: 12, 
        backgroundColor: headerColorTheme.backgroundColor,
        borderRadius: 8
    },
    buttonText: {
        color: headerColorTheme.color,
        textAlign: 'center',
        fontSize: stdFontSizes.xLarge
    }, 

    // botão de não sou cadastrado
    clearButtonContainer: {
        marginVertical: 12
    },
    clearButtonText: {
        fontSize: stdFontSizes.large,
        color: 'red',
        textDecorationLine: 'underline',
    }
})

export default LoginScreen
