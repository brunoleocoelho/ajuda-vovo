import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, FlatList, } from 'react-native'

import CustomHeader from '../components/CustomHeader/CustomHeader';

/** HomeScreen screen for the app */
const HomeScreen = (props) => {

    console.log("--- HomeScreen props: ", props);

    const { navigation, user } = props;

    const goAhead =() => {
        navigation.navigate('ListaScreen', {user})
    }

    return (
        <View  style={styles.mainContainer}>
            {/* //TODO: Header customizado substituir pelo header do react native elements */}
            <CustomHeader 
                title={user.userName}
            />

            <View style={styles.bodyContainer}>
                <Text>HOME SCREEN</Text>
                <Button title="Go Lista" onPress={goAhead} />
            </View>
        </View>
    )
}

// Estilos
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 80,
    },
    bodyContainer: {
        textAlign: 'center',
        padding: 10
    },


})

export default HomeScreen
