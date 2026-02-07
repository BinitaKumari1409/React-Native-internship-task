import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import FoodCard from '../components/Foodcard';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/698184b543b1c97be96155bf')
      .then(res => res.json())
      .then(json => setData(json.record))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <FoodCard
          item={item}
          onPress={() => navigation.navigate('Details', { item })}
        />
      )}
    />
  );
}
