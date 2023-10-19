import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { useRef, useState } from 'react';
import FeedItem from '../../components/FeedItem';

const {height:heightScreen} = Dimensions.get("screen")

export default function Feed() {

  let feedItems = [
    {
      id: '1',
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@henriquesilva',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador',
      images: [
        'https://i.pinimg.com/564x/60/1b/f8/601bf865cad153c1914fe75271b4b5d0.jpg',
        'https://i.pinimg.com/564x/28/03/52/280352db0f4e6bb08312dcce0f2b7c65.jpg',
        'https://i.pinimg.com/564x/97/5f/b3/975fb371246091ef8329a00b0b999442.jpg'
      ],
      product_name: 'Produtos',
      price: 'R$19.99'
    },

    {
      id: '2',
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN',
      images: [
        'https://i.pinimg.com/564x/d2/0f/8c/d20f8c28ce51b28ba5b314136e790c13.jpg',
        'https://i.pinimg.com/564x/74/a3/6e/74a36e430523322a0feba60820d4ed54.jpg',
        'https://i.pinimg.com/736x/fc/64/cb/fc64cb07e95b2bb1dc3f24e3747b7abe.jpg'
      ],
      product_name: 'Massageador de rosto',
      price: 'R$9.99'
    },
    {
      id: '3',
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@sujeitoprogramador',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
      images: [
        'https://i.pinimg.com/564x/9b/cb/f0/9bcbf05c33cbb55d7152418307bb8724.jpg',
        'https://i.pinimg.com/564x/73/58/a2/7358a275c4e8c6a620a6945045027f7b.jpg',
        'https://i.pinimg.com/564x/74/74/a5/7474a52fc04ba33abc0d405a739ad5fd.jpg'
      ],
      product_name: 'Tênis Nike branco',
      price: 'R$129.99',
    }
  ];

  const [showItem, setShowItem] = useState(feedItems[0]);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50, // Item é considerado visível se 50% dele estiver visível
  });

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index]);
    }
  });

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
        renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} feedItems={feedItems} /> }
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment='center'
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
  },
  labelText: {
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
