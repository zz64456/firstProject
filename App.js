import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [number, setNumber] = useState('')
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState('')

  const changePhone = (phone) => {
    setPhone(phone)

    setResult('猜錯囉！')
    if (phone === '0933919547') {
      setResult('你猜對了！！')
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      <TextInput
        style={styles.numberInput}
        onChangeText={(text) => setNumber(text)}
        value={number}
        keyboardType={"numeric"}
        maxLength={5}
      />
      <Text>你希望帳戶餘額為：{number}</Text>

      <TextInput
        style={styles.numberInput}
        onChangeText={(text) => changePhone(text)}
        value={phone}
        keyboardType={"numeric"}
        maxLength={10}
      />
      <Text>{result}</Text>
      {/* <Text>猜猜看我的手機號碼是：{phone}</Text> */}

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
  numberInput: {
    height: 50,
    width: 250,
    backgroundColor: '#dbede4',
    borderWidth: 3,
    borderColor: '#319664',
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  }
});
