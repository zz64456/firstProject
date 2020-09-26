import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Submit from './src/components/Button/Submit'

export default function App() {

  const [text, setText] = useState('')

  const Textsubmit = () => {
    console.log('送出值：' + text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ backgroundColor: 'black', width: 230, height: 60, textAlign: 'center', fontSize: 25, color: 'white' }}
        onChangeText={(text) => setText(text)}
        value={text}
        autoFocus={true}
      />


      <Submit onPress={() => Textsubmit()} fontSize={30} margin={15} borderRadius={10} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
