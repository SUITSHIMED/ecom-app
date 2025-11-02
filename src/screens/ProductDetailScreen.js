// ProductDetailScreen.js
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProductDetailScreen() {
  const route = useRoute();
  const { product } = route.params; // ✅ Safely get passed product

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>No product data</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
  },
});