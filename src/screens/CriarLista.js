import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native'

import Header from '../components/Header/Header';

import { colorTheme, stdFontSizes } from '../util/constants';

import feedList from '../data/product-list.json'; //lista Mock de produtos
import ProdutosLista from '../components/ProdutosLista';


/** CriarLista screen for the app */
const CriarLista = () => {

    // STATE
    const [selected, setSelected] = useState([]);
    const [totalRS, setTotalRS] = useState(0)

    /** Armazena um item selecionado */
    const handleSelected = (prod) => {
        const itemInList = selected.find(item => item.code === prod.code);
        let newSelected = null;

        if (itemInList) {
            newSelected = selected.filter((item) => item.code !== prod.code)
        }
        else {
            newSelected = [...selected, prod];
        }

        const newTotal = newSelected.reduce((prvVal, curVal) => (prvVal + curVal.price), 0);

        console.log("SELECTED", newSelected);
        Promise.all([
            setSelected(newSelected),
            setTotalRS(newTotal)
        ])
    }

    return (
        <View  style={styles.mainContainer}>
            <Header 
                title={'Criar Lista'}
                titleColor={'#FFF'}
                titleAlign={'left'} 
                titlePosition={'left'}
                backgroundColor={colorTheme} 
            />

            <Text style={styles.totalizador}>{`Selecionados: ${selected.length}  Total R$ ${totalRS.toFixed(2) || 0}`}</Text>
            
            <View style={styles.bodyContainer}>
                <ProdutosLista produtos={feedList} actionSelect={handleSelected} />
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
    totalizador: {
        textAlign: 'center',
        fontSize: stdFontSizes.medium,
        fontWeight: 'bold',
    },
})

export default CriarLista;
