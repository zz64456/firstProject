import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')

  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      <TextInput
        style={{ backgroundColor: 'white', width: 300, height: 50 }}
        onChangeText={(text) => setValidCode(text)}
        value={validCode}
      />
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
