import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import { stdFontSizes, headerColorTheme } from '../../util/constants'

import LeftSide from './LeftSide'
import RightSide from './RightSide'


/** Responsável pela renderização de um CustomHeader */
const CustomHeader = (props) => {
    // PROPS (valores default se itens não passados)
    const { 
        title, 
        titleAlign = 'left', 
        titleColor = headerColorTheme.color, 
        backgroundColor = headerColorTheme.backgroundColor,
        leftProps = null,
        rightProps = null,
    } = props;
    
    // estilo mainContainer c/ backgroundColor recebido
    const mainContStyle = {
        ...styles.mainContainer, 
        backgroundColor,
    };

    // estilo do titulo c/ color recebido
    const styleToTitle = {
        ...styles.textCenterTitle, 
        ...{ color: titleColor }
    };

    // props para esq/dir
    const newProps = { 
        title, 
        titleAlign,
        titleColor,
        backgroundColor,
        leftProps,
        rightProps,
    };

    return (
        <View style={mainContStyle}>
            <LeftSide {...{styleToTitle, ...newProps}} />

            <View style={{flex: 1}}> 
                {(titleAlign === 'center') &&
                    <Text style={{...styleToTitle, textAlign: 'left'}}>
                        { title }
                    </Text>
                }
            </View>

            <RightSide {...newProps}  />
        </View>
    )
}


// PROPTYPES
CustomHeader.propTypes = {
    /** Titulo a ser exibido (required) */
    title: PropTypes.string.isRequired,
    
    /** Posição do titulo: `center | left`
     * @default 'left' */
    titleAlign: PropTypes.oneOf(['left','center']),

    /** Cor do titulo
     * @default 'white' */
    titleColor: PropTypes.string,

    /** Cor de fundo do CustomHeader
     * @default '#232340' */
    backgroundColor: PropTypes.string,

    /** Props para botão do lado esquerdo contendo action e icon */
    leftProps: PropTypes.shape({
        /** Function a ser executada pelo botão do lado esquerdo do CustomHeader */
        action: PropTypes.func.isRequired,
        /** Icone a ser exibido no botão */
        icon: PropTypes.oneOf().isRequired
    }),

    /** Props para botão do lado direito contendo action e icon */
    rightProps: PropTypes.shape({
        /** Function a ser executada pelo botão do lado direito do CustomHeader */
        action: PropTypes.func.isRequired,
        /** Icone a ser exibido no botão */
        icon: PropTypes.oneOf().isRequired
    })
}


// ESTILOS
const styles = StyleSheet.create({

    mainContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        height: 80,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 25,
    },

    textCenterTitle: {
        // flex: 1,
        textShadowColor: '#CCC',
        fontSize: stdFontSizes.xLarge
    }
})


export default CustomHeader;
