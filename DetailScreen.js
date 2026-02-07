import React from 'react';
import { View, Text, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 10 }}>
      <Image
        source={{ uri: item.image }}
        style={{ height: 250, width: '100%' }}
      />
      <Text>{item.name}</Text>
      <Text>⭐ {item.rating}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}
