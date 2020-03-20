import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Produto from './Produto';

/** ProdutosLista screen for the app */
const ProdutosLista = (props) => {
    // PROPS
    const { produtos, actionSelect } = props;

    // STATE
    const [listProduct, setListProduct] = useState(null);

    // Atua na atualização da lista de produtos
    useEffect(() => {
        if(!listProduct) {
            // Ordenando lista antes
            const newList = produtos.sort((x, y) => {
                if (x.description < y.description) return -1;
                if (x.description > y.description) return 1;
                return 0;
            })
            setListProduct(newList);
        }
    }, [produtos])

    /** Renderiza cada item com o componente Produto */
    const itemRender = ({item}) => (
        <Produto produto={item} selectAction={() => actionSelect(item)} />
    );

    return (
        <View>
            <FlatList 
                data={ listProduct }
                renderItem={ itemRender }
                keyExtractor={item => item.code}
            />
        </View>
    )
}

// Estilos
// const styles = StyleSheet.create({})

export default ProdutosLista;
