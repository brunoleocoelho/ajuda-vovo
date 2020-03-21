import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/** Renderiza apenas ícones de ação para o lado direito do Header */
const RightSide = (props) => {
    const { titleColor } = props;

    return (
        <View style={styles.rightContainer}>
            <Text style={{color: titleColor || '#FFF' }} >...</Text>
        </View>
    )
}

export default RightSide

const styles = StyleSheet.create({
    rightContainer: {

    }
})
