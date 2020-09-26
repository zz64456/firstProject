import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MyButton from './src/components/Button/MyButton'

export default function App() {

  const printMyButton = () => {
    console.log('按到我了．．．')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text>
      <MyButton Mytitle={'Click'} MyonPress={() => printMyButton()} />

      <MyButton MyonPress={() => printMyButton()} />
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
