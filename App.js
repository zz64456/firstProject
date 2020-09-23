import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {

  // const printButton = () => {
  //   console.log('按到我了啦！')
  // }

  const printHighlight = () => {
    console.log('按到嗨賴了啦！')
  }
  const printOpacity = () => {
    console.log('按到歐胚捨體啦！')
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.mainText}>Open up App.js to start working on my good app!</Text> */}
      {/* <View style={styles.butView}>
        <Button
          title={'click'}
          onPress={() => printButton()}
        />
      </View> */}


      <TouchableHighlight
        style={styles.touchHighlight}
        onPress={() => printHighlight()}
      >
        <Text>Click TouchableHighlight</Text>
      </TouchableHighlight>


      <TouchableOpacity
        style={styles.touchOpacity}
        onPress={() => printOpacity()}
      >
        <Image
          style={{ width: 200, height: 200 }}
          // source={require('./src/img/dot.png')}
          source={{ uri: 'data:image/jpeg;base64,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' }}
        />
        {/* <Text>Click TouchableOpacity</Text> */}
      </TouchableOpacity>

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
  touchHighlight: {
    margin: 3,
    backgroundColor: '#00aeef',
    borderRadius: 5,
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 3,
  },
  touchOpacity: {
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    width: 200,
    height: 200,
    borderColor: 'white',
    borderWidth: 3,
  },
});
