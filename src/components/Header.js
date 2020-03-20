import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'


// **************************************************************
// TODO: Melhorar o Header com possibilidade de botões à direita
// **************************************************************


/** Responsável pela renderização de um header */
const Header = ({ title, titleColor, titleAlign, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor || '#EEE' }]}>
            <Text style={[styles.textTitle, { color: titleColor || '#000', textAlign: titleAlign || 'center' }]}>
                { title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'flex-end',
        height: 80,
        top: 0,
        width: '100%',
        padding: 15,
    },
    textTitle: {
        textShadowColor: '#DDD',
        textAlign: 'center',
        fontSize: 24
    }
})

// PropTypes Documentation: 
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Header.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    titleAlign: PropTypes.oneOf(['left','center','right'])
}

export default Header;
