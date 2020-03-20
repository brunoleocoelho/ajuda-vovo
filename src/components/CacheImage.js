import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import shorthash from 'shorthash';

/**
 * Componente com o objetivo de recuperar imagem do cache,
 * se não houver, faz o download
 */
const CacheImage = (props) => {
    const [source, setSource] = useState(null);

    useEffect(() => {
        const { uri } = props;

        // shorthash unique gets a hash name for the given string
        const name = shorthash.unique(uri);

        async function getImg(params) {
            // montando caminho do arquivo localmente e tentando recupera-lo do cache
            const path = `${FileSystem.cacheDirectory}${name}`;
            const img = await FileSystem.getInfoAsync(path);
    
            if (img.exists) {
                setSource({uri: img.uri});
                return;
            }
    
            // Recuperando imagem da WEB
            const newImg = await FileSystem.downloadAsync(uri, path);
            setSource({uri: newImg.uri});
        }

        getImg();

    }, [props.uri])

    return (
        <Image source={source} style={props.style} />
    )
}


export default CacheImage;