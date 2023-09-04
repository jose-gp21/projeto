const ShowProduct = ({ images, name, price, onBuyNow }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.image} />
                ))}
            </ScrollView>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <TouchableOpacity onPress={onBuyNow} style={styles.buyNowButton}>
                <Text style={styles.buyNowText}>Comprar agora</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: height / 6,
        padding: 10,
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 10,
    },
    productName: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    productPrice: {
        color: 'gray',
    },
    buyNowButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
    },
    buyNowText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ShowProduct;