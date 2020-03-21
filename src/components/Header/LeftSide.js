import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { stdFontSizes } from '../../util/constants'

/** Renderiza texto, ou ícones para o lado esquerdo do Header */
const LeftSide = (props) => {
    const { title, titlePosition, styleToCenter } = props;

    return (
        <View  style={styles.leftContainer}>
            {(titlePosition === 'left') &&
                <Text style={{...styleToCenter, textAlign: 'left'}}>
                    { title }
                </Text>
            }
        </View>
    )
}

export default LeftSide

const styles = StyleSheet.create({
    textLeftTitle: {
        textShadowColor: '#DDD',
        fontSize: stdFontSizes.xLarge
    }
})
