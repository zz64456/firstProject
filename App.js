import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  const [adding, setAdding] = useState(1)
  const [page, setPage] = useState('pic')

  const counterPlus = () => {
    setCount((count + Number(adding)))
    console.log('計數增加到' + (count + adding) + '啦！')
  }
  const counterZero = () => {
    setCount(0)
    console.log('計數被歸零惹～')
  }

  const toPic = () => {
    setPage('pic')
    console.log('移動到圖片頁面。')
  }
  const toInfo = () => {
    setPage('info')
    console.log('移動到資訊頁面。')
  }

  return (

    < View style={styles.container} >
      <View style={{ marginBottom: 10, alignItems: 'center' }}>
        <TextInput
          style={{ height: 30, width: 100, borderColor: 'skyblue', borderWidth: 2.5, backgroundColor: '#dee2e0', textAlign: 'center' }}
          value={adding}
          onChangeText={(amount) => setAdding(amount)}
          keyboardType='numeric'
        />
        <Text>單次增加數量：{adding}</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={() => counterPlus()}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>計數增加</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={() => counterZero()}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>計數歸零</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20 }}>{count}</Text>
      </View>
      <StatusBar style="auto" />

      <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: 'white', height: 100, width: 300, alignItems: 'center', justifyContent: 'space-around' }}>
        <TouchableHighlight
          style={{ height: 40, width: 70, backgroundColor: '#c1dff2', justifyContent: 'center', margin: 3 }}
          onPress={() => toPic()}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }} > 圖片頁</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{ height: 40, width: 70, backgroundColor: '#c1dff2', justifyContent: 'center', margin: 3 }}
          onPress={() => toInfo()}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }}>資訊頁</Text>
        </TouchableHighlight>
      </View>

      <View>
        <Text>{page}</Text>
      </View>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchOpacity: {
    margin: 3,
    backgroundColor: '#76c49d',
    borderRadius: 5,
    width: 250,
    height: 50,
    borderColor: 'orange',
    borderWidth: 3,
    justifyContent: "center"
  },
});
