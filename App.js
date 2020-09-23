import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  const [adding, setAdding] = useState(1)
  const [page, setPage] = useState('pic')

  const currentPpage = (page) => {
    if (page == 'pic') {
      setPage('pic')
      console.log('移動到圖片頁面。')
    }
    if (page == 'info') {
      setPage('info')
      console.log('移動到資訊頁面。')
    }
  }

  const PrintPage = () => {
    if (page == 'pic') {
      return (
        <View style={{ height: 100, width: 200, alignItems: 'center' }}>
          {/* <Text>123</Text> */}
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAflBMVEX///8AAADr6+u7u7v6+vri4uJoaGj19fXc3NzT09Px8fFkZGTo6Oj7+/s5OTmVlZUmJiZDQ0N7e3utra3GxsbMzMxLS0uEhISmpqYwMDCNjY2zs7Ofn5/e3t41NTUnJydXV1ccHBwVFRVzc3MfHx+SkpJRUVELCwuHh4cWFhZ443wnAAADf0lEQVR4nO3a53qqQBCA4bNioRhREDCKJVFjcv83eBArUsWCi9/7W9jZeZyt/PsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK9hqlUdQaipTZRm1UFkahhVRxBo2W3D16uOIltnNa04gubwdyYMp+IocunzdqXtq74rxGbcrTSIQlzRqqztoOTmQgh38lFZCMUtREWjlD70emLLeI35JI8nxLCCZjVzlyXxZzYqaL4EX4jes//56sgQewO78+TGy1KCaM1nNqgr3uCQJrF8+dnuaLqN92lLhKZmnrIkhCdJ2W3pqyDgz6c01dT8xVmWJJntjsLhYvz4dloT6/M8TRIsMqPGYdSPDnroRbMkxG9167dynF3cD5x8gpJzL7IkeqPX3gMnaGzCyB82TAXL79VlmmSa7U7a+yHjEe/WFWsWy5IQVtU78VJGh7n63i9uauNBQpZEz5au7ELdQwfuuu7sqH47KUvBX7eKLdNdHBc3o7u9sjsJzwWSeOrdWnk2+9gJ/y7v6wzHvZQsib58s92J/nfsx/rml3U08yctSzKXXcg69cS67U1Tu91PT5Oks92JetaXQfnXNBQrteS2vkayHKmkihRLuR19x1lnZkmIhdxlF3IiPbKvfr6j+Yuv7DQJS44T3xxGpE+96x4O1gJ5WRKb0Yvf2xXkXPRLKfxkQ1nGt3IxdSi7nctV9KrQSKU7ZuIm5fLvJPtsd6Yb691P7jPOevFdIE3iW5aLlkL8eAfdrNm8ZRvxJxK5tSm7ncsTyK1VSh+7k2XSz5NsLHn3dsm05I4uYkdsesZWLmb+6l+plGCmdbZvDdVdFX7ozuS3yPB9MFCkumgpKHawHbGZzZIOKzMt61Z2O/rm2kRk6/t1mu3OpQxTJbm1LLudUX73i9rUtOz21vfK09yU4CO6W1j5OShiJtdnBWWkXJ1cp95lt3d7pj7rXnZ73o15Grz4p/X3k7pEL6T9DmW3Nymfpn6tjlRytcrm6UeR/qLlShmXmBnaMn7Nc6MSi/TPcf2OVAr4uDZP7tuV3cF1s9+yFvd2JWV9R3BZdm8128Wo+SkKGW+zyEylFEjT91q2T6EfIi9Vf289OkWoGafpfW/49lV3Tkke1we++q5rgnTOMpqsnuFrb7nCLKLl2KYXMCfOlL8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/AcpIyTmTeUBXgAAAABJRU5ErkJggg==' }}
          />
        </View>
      )
    } else {
      return (
        <View style={{ height: 100, width: 200, alignItems: 'center' }}>
          <Text>讓你看看Nike Logo！</Text>
        </View>
      )
    }
  }

  const counterPlus = () => {
    setCount((count + Number(adding)))
    console.log('計數增加到' + (count + adding) + '啦！')
  }
  const counterZero = () => {
    setCount(0)
    console.log('計數被歸零惹～')
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
          onPress={() => currentPpage('pic')}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }} > 圖片頁</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{ height: 40, width: 70, backgroundColor: '#c1dff2', justifyContent: 'center', margin: 3 }}
          onPress={() => currentPpage('info')}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }}>資訊頁</Text>
        </TouchableHighlight>
      </View>

      <PrintPage />


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
