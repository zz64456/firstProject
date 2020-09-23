import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

    // const food = 'noodles'
    const [food, setFood] = useState('candy')
    const [count, setCount] = useState(0)

    const changeFood = () => {
        setFood('noodles')
        console.log('按到change food 按鈕！')
    }

    const changeCount = () => {
        setCount(count + 1)
        console.log('按到change count 按鈕！')
    }

    const [validCod, setValidCode] = useState('')

    return (
        <View style={styles.container}>
            {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
            <Text style={[styles.mainText, styles.commentText,]}>{food}</Text>
            <Text>計數器:{count}</Text>
            <Button
                title='change food'
                onPress={() => changeFood()}
            />
            <Button
                title='change count'
                onPress={() => changeCount()}
            />
            <TextInput
                style={{ height: 50, width: 250, borderRadius: 1, borderColor: 'darkgray', borderWidth: 5, backgroundColor: 'gray', color: 'white', fontSize: 28, textAlign: 'center' }}
                onChangeText={(text) => setValidCode(text)}
                value={validCod}
                maxLength={4}
                placeholder='Please type number'
                keyboardType={'phone-pad'}
                secureTextEntry={true}
                editable={true}
                autoFocus={true}
            />


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 25,
        textAlign: "center",
        color: 'red'
    },
    commentText: {
        color: '#194D33'
    }
});
