import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const vw = percentageWidth => Dimensions.get('window').width * (percentageWidth / 100);
const vh = percentageHeight => Dimensions.get('window').height * (percentageHeight / 100);

export default function ButtonProduct(props) {
  const { productData, allProducts, productIndex } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveSlide(index);
  };

  return (
    <View style={styles.navigatorContainer}>
      <View style={styles.productContainer}>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onMomentumScrollEnd={handleScroll}
            style={styles.scrollView}
          >
            {productData.images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </ScrollView>

          <View style={styles.dotContainer}>
            {productData.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { opacity: index === activeSlide ? 1 : 0.5 }
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2} onPress={() => alert('compra')}>{productData.product_name}</Text>
          <Text style={styles.productPrice}>{productData.price}</Text>
          <TouchableOpacity onPress={() => alert('Produto comprado!')} style={styles.touchable}>
            <LinearGradient
              colors={['#8C52FF', '#FF5757']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buyNowButton}>
              <Text style={styles.buyNowText}>Comprar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    zIndex: 99,
    width: vw(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: vw(2),
    borderRadius: vw(3),
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  scrollViewContainer: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  scrollView: {
    backgroundColor: 'transparent',
    width: vw(25),
    height: vw(25),
  },
  image: {
    backgroundColor: 'transparent',
    width: vw(25),
    height: vw(25),
    borderRadius: vw(2.5),
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: vw(1.5),
  },
  dot: {
    backgroundColor: 'transparent',
    position:'relative',
    width: vw(2),
    height: vw(2),
    borderRadius: vw(1),
    backgroundColor: 'white',
    marginHorizontal: vw(0.5),
  },
  productInfo: {
    flex: 1,
    marginLeft: vw(4),
    backgroundColor: 'transparent',
  },
  productName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: vw(3),
    backgroundColor: 'transparent',
  },
  productPrice: {
    backgroundColor:'transparent',
    color: 'green',
    fontSize: vw(3.5),
    marginVertical: vh(0.5),
  },
  touchable: {
    marginTop: vh(1.5),
    borderRadius: vw(2),
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  buyNowButton: {
    padding: vh(1),
    alignItems: 'center',
    borderRadius: vw(7),
    backgroundColor: 'transparent',
  },
  buyNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: vw(3),
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  navigatorContainer: {
    flexDirection: 'row',  // Alinha os filhos horizontalmente
    alignItems: 'center',  // Centraliza verticalmente
    backgroundColor: 'transparent',
  },

});