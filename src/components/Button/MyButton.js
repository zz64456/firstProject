import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

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
    <TouchableOpacity onPress={props.onPress}>
        <Text>
            {props.title}
        </Text>
    </TouchableOpacity>
)

export default MyButton