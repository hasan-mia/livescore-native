import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { id: 1, title: 'Category 1', description: 'Description for Category 1' },
  { id: 2, title: 'Category 2', description: 'Description for Category 2' },
  { id: 3, title: 'Category 3', description: 'Description for Category 3' },
];

export default function HomeScreen({ navigation, route }) {
  return (
    <View>
      <AppHeader title="Home" navigation={navigation} />

      {/* Category Card */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        justifyContent="center"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            navigation={navigation}
          />
        ))}
      </ScrollView>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
