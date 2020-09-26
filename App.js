import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Submit from './src/components/Button/Submit'

export default function App() {

  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      <TextInput
        onChangeText
      />
      <Submit title='' onPress={() => Textsubmit()} />

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
