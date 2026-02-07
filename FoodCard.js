import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function FoodCard({ item, onPress }) {

  const getImage = (name) => {
    if (name === 'Pizza') {
      return require('../assets/pizza.jpg');
    } else if (name === 'Burger') {
      return require('../assets/burger.jpg');
    } else {
      return require('../assets/pizza.jpg'); // default
    }
  };

  return (
    <View style={styles.card}>
      <Image source={getImage(item.name)} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    backgroundColor: '#ff7043',
    padding: 10,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
