import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Button } from 'react-native-elements'

import { stdFontSizes } from '../../util/constants'

/** Renderiza texto, ou ícones para o lado esquerdo do CustomHeader */
const LeftSide = (props) => {
    const { 
        title,
        titleAlign,
        titleColor,
        styleToTitle,
        leftProps
    } = props;

    return (
        <View  style={styles.leftContainer}>

            {leftProps && 
                <Button 
                    icon={ { name: leftProps.icon, color: titleColor } } 
                    type='clear' 
                    containerStyle={{ backgroundColor:'transparent' }} 
                    onPress={ leftProps.action } 
                />
                // <Icon name="menu" containerStyle={{ padding: 10 }} color='#FFF' />
            }
            
            {(titleAlign !== 'center') &&
                <Text style={{...styleToTitle, textAlign: 'left'}}>
                    { title }
                </Text>
            }

        </View>
    )
}

// ESTILOS
const styles = StyleSheet.create({
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textLeftTitle: {
        color: '#DDD',
        fontSize: stdFontSizes.xLarge
    }
})

export default LeftSide;
