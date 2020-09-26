import React from 'react'

import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import buttonStyle from '../../styles/buttonStyle'


const Submit = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={{ justifyContent: 'center', backgroundColor: props.backgroundColor, margin: props.margin, width: props.width, height: props.height, borderRadius: props.borderRadius }}>
            <Text style={{ fontSize: props.fontSize, textAlign: 'center' }}>
                {props.title}
                {/* {bg} */}
            </Text>
        </TouchableOpacity >
    )
}

export default Submit


Submit.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func
}

Submit.defaultProps = {
    title: 'Submit',
    backgroundColor: buttonStyle.styleSubmit.backgroundColor,
    margin: buttonStyle.styleSubmit.margin,
    height: buttonStyle.styleSubmit.height,
    width: buttonStyle.styleSubmit.width,
    borderRadius: buttonStyle.styleSubmit.borderRadius,

    fontSize: buttonStyle.styleSubmitText.fontSize,

}