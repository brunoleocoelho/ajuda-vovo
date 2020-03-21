import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native'

import Header from '../components/Header/Header';

import { colorTheme } from '../util/constants';

/** Home screen for the app */
const Home = () => {

    return (
        <View  style={styles.mainContainer}>
            <Header 
                title={'Home'}
                titleColor={'#FFF'}
                titleAlign={'left'} 
                backgroundColor={colorTheme} 
            />
            <View style={styles.bodyContainer}>
                <Text>HOME SCREEN</Text>
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
        backgroundColor: '#CECECE',
        textAlign: 'center',
    },


})

export default Home
