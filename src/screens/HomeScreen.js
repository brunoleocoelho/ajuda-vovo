import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, FlatList, } from 'react-native'

/** HomeScreen screen for the app */
const HomeScreen = (props) => {

    console.log("--- HomeScreen props: ", props);

    const { navigation, user } = props;

    const goAhead =() => {
        navigation.navigate('ListaScreen', {user})
    }

    return (
        <View  style={styles.mainContainer}>
            <Text>HOME SCREEN {user.userName}</Text>
            <Button title="Go Lista" onPress={goAhead} />
        </View>
    )
}

// Estilos
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 12
    },

})

export default HomeScreen
