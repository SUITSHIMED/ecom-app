import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading products...</Text>
      </View>
    );
  }

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productRating}>⭐ {item.rating.rate} ({item.rating.count})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.screenTitle}>All Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsContainer: {
    flex: 1,
    paddingTop: 16,
  },
  productsList: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#140205ff',
    marginBottom: 4,
  },
  productRating: {
    fontSize: 12,
    color: 'gray',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});