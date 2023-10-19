import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, Platform, Image } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { Video } from 'expo-av';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ButtonBag from '../ButtonBag';
import ButtonProduct from '../ButtonProduct';
import ModalProductInfo from '../ModaProductInfo';

const { height: heightScreen, width: widthScreen } = Dimensions.get("screen");  

export default function FeedItem({data, currentVisibleItem, feedItems}) {

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isMuted, setIsMuted] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false); //state para verificar se o usuário está seguindo

  useEffect(() => {
    if(currentVisibleItem?.id === data?.id){
      video.current?.playAsync();
    }else{
      video.current?.pauseAsync();
    }
  }, [])

  function handlePlayer() {
    setIsMuted(!isMuted);
  }

  function toggleFollow() { // Função para alternar o estado de seguir
    setIsFollowing(!isFollowing);
  }

  return (
    <Pressable onPress={handlePlayer} style={{position: 'relative', zIndex: 10}}>
      <View style={styles.info}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.description} numberOfLines={1}>{data?.description}</Text>
      </View>
      <TouchableOpacity style={styles.buttonProduct} onPress={()=><ModalProductInfo/>}>
        <ButtonProduct productData={data} allProducts={feedItems} productIndex={data.id - 1} />
      </TouchableOpacity>

      <View style={styles.actions}>

        <TouchableOpacity style={styles.profileButton} onPress={toggleFollow}>
          <Image source={{ uri: 'https://i.pinimg.com/736x/bc/f2/c1/bcf2c1b85d4cb1ea233525f9f4d2158a.jpg' }} style={styles.profileImage} />
          {!isFollowing && <Ionicons name="add" size={11} color="#fff" style={styles.plusIcon} />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={35} color="#fff" /><Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff" /><Text style={styles.actionText}>23</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="dots-vertical" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <ButtonBag/>
        </TouchableOpacity>
      </View>

      <Video 
        ref={video}
        style={{width: '100%', height: heightScreen}}
        source={{ uri: data?.video}}
        resizeMode="cover"
        shouldPlay={true}
        isMuted={isMuted}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.iconContainer}>
        {isMuted ? 
          <MaterialIcons name="volume-off" size={40} color="white" /> : 
          <MaterialIcons name="volume-up" size={40} color="white" />
        }
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
      
  },
  iconContainer: {
    position: 'absolute',
    top: '45%',
    left: '45%', // Corrected the value here
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 5,
  },
  info: {
    position: 'absolute',
    zIndex: 90,
    left: 8,
    padding: 8,
    bottom: 100
  },
  name: {
    color: "#FFF",
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0, 0.60)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 8,
  }, 
  description: {
    color: "#FFF",
    marginRight: 40,
    textShadowColor: 'rgba(0,0,0, 0.28)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions:{
    position: 'absolute',
    right: 8,
    zIndex: 90,
    bottom: Platform.OS === 'android' ? 130 : 180,
    gap: 8
  },
  buttonProduct:{
    position: 'absolute',
    left: 8,
    zIndex: 99,
    bottom: Platform.OS === 'android' ? 160 : 210,
  },
  actionText:{
    textAlign: 'center',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0, 0.9)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  profileButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    overflow: 'visible', // Permita que o ícone "+" exceda o limite do botão do perfil
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileImage: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 10,
  },
  plusIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 2, 
    zIndex: 11, 
  },
});
