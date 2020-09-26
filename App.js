import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const getNumber = () => {
    if (validCode == '1234') {
      return <Text style={{ color: 'yellow', fontSize: 15 }}>輸入正確</Text>
    } else if (validCode == '') {
      return <Text style={{ color: 'red', fontSize: 15 }}>請輸入密碼</Text>
    } else {
      return <Text style={{ color: 'red', fontSize: 15 }}>輸入錯誤</Text>
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      <TextInput
        maxLength={4}
        style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'gray', backgroundColor: 'white', color: 'black', fontSize: 28, textAlign: 'center' }}
        onChangeText={(text) => setValidCode(text)}
        keyboardType={'numeric'}
        value={validCode}
        secureTextEntry={true}
        autoFocus={true}
      />

      {/* {getNumber()} */}

      {/* {validCode === '1234' ? <Text style={{ color: 'yellow', fontSize: 15 }}>輸入正確</Text> : <Text style={{ color: 'red', fontSize: 15 }}>輸入錯誤</Text>} */}

      {validCode.length === 4 ? (
        validCode === '1234' ? <Text style={{ color: 'yellow', fontSize: 15 }}>輸入正確</Text> : <Text style={{ color: 'red', fontSize: 15 }}>輸入錯誤</Text>
      ) : <Text style={{ color: 'red', fontSize: 15 }}>請輸入密碼</Text>}

      <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
          Enter
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
