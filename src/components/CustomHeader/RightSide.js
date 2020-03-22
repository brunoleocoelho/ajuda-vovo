import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Icon info: https://react-native-elements.github.io/react-native-elements/docs/icon.html
import { Icon, Button } from 'react-native-elements'

/** Renderiza apenas ícones de ação para o lado direito do CustomHeader */
const RightSide = (props) => {
    const { 
        titleColor,
        rightProps
    } = props;

    return (
        <View style={styles.rightContainer}>

            {rightProps &&
                <Button 
                    icon={ { name: rightProps.icon, color: titleColor } } 
                    type='clear' 
                    containerStyle={{ backgroundColor:'transparent' }} 
                    onPress={ rightProps.action } 
                />
                // <Icon name="more-vert" containerStyle={{ padding:10 }} color='#FFF' />
                // <Text style={{color: titleColor || '#FFF' }} >...</Text>
            }

        </View>
    )
}

// ESTILOS
const styles = StyleSheet.create({
    rightContainer: { }
})

export default RightSide;
