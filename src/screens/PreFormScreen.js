import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Button } from 'react-native-elements'

import { headerColorTheme, stdFontSizes, textoInicial, perguntaInicial, avisoLegal } from '../util/constants'

/** PreFormScreen screen for the app */
const PreFormScreen = (props) => {

    console.log("--- PreFormScreen props: ", props);
    const { navigation } = props;

    // Functions
    const goNeedHelp = () => {
        navigation && navigation.navigate('FormPrecisoAjuda')
    }

    const goWillHelp = () => {
        navigation && navigation.navigate('FormVouAjudar')
    }

    const showLawAdvise = () => {
        Alert.alert('Aviso Legal', avisoLegal)
    }

    // Propriedades aplicadas a tela
    // `${user ? 'Olá '+ user.userName +'! \n' : ''}`
    
    const botoes = [
        {   
            title: 'Sou idoso, preciso de ajuda',
            icon: 'warning',
            action: goNeedHelp,
            background: '#EEAA22'
        },
        {   
            title: 'Quero ajudar idosos',
            icon: 'pan-tool',
            action: goWillHelp,
            background: '#228822'
        },
    ];
    
    return (
        <View  style={styles.mainContainer}>
            <Text style={styles.textoInicial}>{textoInicial + perguntaInicial}</Text>

            { botoes.map( (btn, idx) => {
                const estilo = [ styles.buttonStyle, {backgroundColor: btn.background} ]
                return (
                    <Button
                        titleStyle={ styles.buttonText }
                        containerStyle={ styles.buttonContainer }
                        buttonStyle={ estilo }
                        key={ String(idx + btn.icon) }
                        icon={{ name: btn.icon, color: 'white'}} 
                        title={ btn.title } 
                        onPress={ btn.action } 
                    />
                )
            }) }

            <View style={styles.footerContainer}>
                <Button 
                    type='clear'
                    title='Aviso Legal e Direitos' 
                    titleStyle={styles.avisoLegalText} 
                    onPress={showLawAdvise}
                />
            </View>
        </View>
    )
}

// Estilos
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        padding: 12
    },

    // Texto apresentado
    textoInicial: {
        textAlign: 'center',
        color: headerColorTheme.backgroundColor,
        fontSize: stdFontSizes.large,
        marginVertical: 12,
    },

    // Botões principais
    buttonContainer: {
        marginVertical: 4
    },
    buttonText: {
        fontSize: stdFontSizes.large
    },
    buttonStyle: {
        backgroundColor: headerColorTheme.backgroundColor,
        borderRadius: 8,
        padding: 20,
    },

    // botão de aviso legal rodapé
    footerContainer: {
        position: 'absolute', 
        bottom:0, 
        alignSelf: 'center'
    },
    avisoLegalText: {
        color:'#888', 
        // fontSize: 14
    },
})

export default PreFormScreen
