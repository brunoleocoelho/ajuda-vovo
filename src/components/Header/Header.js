import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import { colorTheme, stdFontSizes } from '../../util/constants'

import LeftSide from './LeftSide'
import RightSide from './RightSide'


/** Responsável pela renderização de um header */
const Header = (props) => {

    const { 
        title, 
        titlePosition = 'left', 
        titleColor = '#000', 
        backgroundColor = colorTheme,
    } = props;
    
    const mainContStyle = {
        ...styles.container, 
        ...{ backgroundColor },
    };

    const styleToCenter = {
        ...styles.textCenterTitle, 
        ...{ color: titleColor }
    };

    return (
        <View style={mainContStyle}>
            
            <LeftSide {...props} styleToCenter={styleToCenter} />

            {(titlePosition === 'center') &&
                <Text style={styleToCenter}>
                    { title }
                </Text>
            }
            
            <RightSide {...props} />

        </View>
    )
}


// PROPTYPES
Header.propTypes = {
    title: PropTypes.string.isRequired,
    titlePosition: PropTypes.oneOf(['left', 'center']),
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    titleAlign: PropTypes.oneOf(['left','center'])
}


// ESTILOS
const styles = StyleSheet.create({
    
    container: {
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
        textShadowColor: '#DDD',
        fontSize: stdFontSizes.xLarge
    }
})


export default Header;
