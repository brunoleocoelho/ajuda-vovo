import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native'
import { Button } from 'react-native-elements'

import { headerColorTheme, stdFontSizes } from '../util/constants'

/** HomeScreen screen for the app */
const HomeScreen = (props) => {

    console.log("--- HomeScreen props: ", props);
    const { navigation, user, logOut } = props;

    // Definindo botão direito do header
    navigation && navigation.setOptions({
        headerRight: () => (
            <Button 
                title={'Sair'}
                titleStyle={{ color: 'white'}}
                icon={{ name: 'power-settings-new', color: 'white' }} 
                type='clear' 
                containerStyle={{ backgroundColor:'transparent' }} 
                onPress={() => logOut(null)}
            />
        ),
    })

    const goAhead = () => {
        navigation && navigation.navigate('ListaScreen', {user})
    }

    const updateTitle = () => {
        user && navigation.setOptions({ title: String(user.userName).toUpperCase() })
    }

    // Propriedades aplicadas a tela
    const textoInicial = `${user ? 'Olá '+ user.userName +'! \n' : ''}`
        + 'O app \'Ajuda Vovô\' foi criado com para ajudar idosos a enfrentar a pandemia do corona vírus (COVID-19), e conectar pessoas que estão dispostas a ajudá-los de alguma forma, para que não precisem sair de casa!'
        +'\n\nPara começar, especifique como deseja participar:';
    
    const botoes = [
        {   
            title: 'Preciso de Ajuda',
            icon: 'warning',
            action: goAhead,
            background: '#EEBB00'
        },
        {   
            title: 'Quero Ajudar',
            icon: 'pan-tool',
            action: updateTitle,
            background: 'green'
        },
    ];
    
    return (
        <View  style={styles.mainContainer}>
            <Text style={styles.textoInicial}>{textoInicial}</Text>

            {
                botoes.map( (btn, idx) => {
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
                })
            }
            {/* <Button
                titleStyle={styles.buttonText}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                icon={{ name: 'list', color: 'white'}} 
                title="Go Lista" 
                onPress={goAhead} 
            />

            <Button
                titleStyle={styles.buttonText}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                icon={{ name: 'sync', color: 'white'}}
                title="Update the title"
                onPress={updateTitle}
            /> */}
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
    textoInicial: {
        textAlign: 'center',
        color: headerColorTheme.backgroundColor,
        fontSize: stdFontSizes.large,
        marginVertical: 12,
    },
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
        
    }
})

export default HomeScreen
