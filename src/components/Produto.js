import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { stdFontSizes } from '../util/constants'

import CacheImage from './CacheImage';

/**
 * Renderiza um Produto
 */
const Produto = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const { produto, selectAction } = props;

    /** Altera formatação do item se selecionado */
    const toggleCss = () => {
        selectAction(produto);
        setIsSelected( !isSelected );
    }

    const priceToShow = String(parseFloat(produto.price).toFixed(2)).replace('.', ',')
    const cssToApply = [
        styles.container, 
        isSelected && styles.selectedContainer
    ];

    return (
        <TouchableOpacity style={cssToApply} onPress={toggleCss} >

            <CacheImage style={styles.image} uri={produto.imageUrl} />

            <View>
                <Text style={styles.textDescription}>
                    { produto.description } 
                </Text>
                
                <Text style={styles.textPrice}>
                    { 'R$ '+ priceToShow }
                </Text>

                <Text style={styles.textCode}>
                    { `Cód.: ${produto.code}` }
                </Text>
            </View>

        </TouchableOpacity>
    )
}


// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding:10,
        marginBottom: 4,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#EEE',
    },
    selectedContainer: {
        backgroundColor: '#6489ce',
    },
    textDescription: {
        fontSize: stdFontSizes.xXLarge,
        fontWeight: 'bold',
        color: '#222',
    },
    textCode: {
        fontSize: stdFontSizes.small,
        color: '#444',
    },
    textPrice: {
        fontSize: stdFontSizes.large,
        fontWeight: 'bold',
        color: '#BB0000'
    },
    image: {
        width: 75,
        height: 75,
        margin: 5,
        marginRight: 10,
    }
})


export default Produto;
