import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import {useRef, useState} from 'react';
import FeedItem from '../../components/FeedItem';

export default function Feed() {

  let feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@henriquesilva',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador',
     },
    {
      id: '2', 
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN',
     },
    {
      id: '3', 
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@sujeitoprogramador',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
     }
  ]
  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({viableItems}) => {
    if(viableItems && viableItems.lenght > 0){
      setShowItem(feedItems[viableItems[0].index])
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.labelText}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.labelText}>Para você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>  
      </View>
      <FlatList
          data={feedItems}
          renderItem={ ({ item }) => <FeedItem data={item} currentVisibleItem={showItem}/> }
          onViewableItemsChanged={onViewRef.current}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  labels:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 : 55,
    zIndex: 99,
  },
  labelText:{
    color: '#FFF',
    marginBottom: 4
  },
  touchable: {
    marginHorizontal: 4 // used this as a replacement for gap
  },
  indicator: {
    // styles for your indicator here
    width: 50, 
    height: 2,
    backgroundColor: 'white',
    alignSelf: 'center'
  }
})
