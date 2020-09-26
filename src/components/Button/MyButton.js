import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

// function MyButton(props) {
//     return (
//         <TouchableOpacity onPress={props.onPress}>
//             <Text>
//                 {props.title}
//             </Text>
//         </TouchableOpacity>
//     )
// }

const MyButton = props => (
    <TouchableOpacity onPress={props.MyonPress} >
        <Text>
            {props.Mytitle}
        </Text>
    </TouchableOpacity>
)

export default MyButton

MyButton.propTypes = {
    Mytitle: PropTypes.string.isRequired,
    MyonPress: PropTypes.func
}

MyButton.defaultProps = {
    Mytitle: 'Hello'
}