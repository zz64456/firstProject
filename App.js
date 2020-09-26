import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const [result, setResult] = useState('')

  const verify = () => {
    if (validCode === '1234') {
      setResult('密碼正確！！')
    } else {
      setResult('密碼錯誤。')
    }
  }


  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      <TextInput
        style={{ textAlign: 'center', fontSize: 28, backgroundColor: 'white', width: 300, height: 50 }}
        onChangeText={(text) => setValidCode(text)}
        value={validCode}
        secureTextEntry={true}
      />

      <Text style={{ marginTop: 15, fontSize: 15 }}>{result}</Text>

      <TouchableOpacity
        onPress={verify}
        style={{ justifyContent: 'center', marginTop: 15, borderColor: 'white', borderWidth: 1, borderRadius: 25, height: 50, width: 150, backgroundColor: '#edd9fa' }}>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>送出</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E7A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
