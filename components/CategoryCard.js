import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function CategoryCard({id, title, navigation}) {
  return (
    <Card style={styles.card}>
        <Card.Content>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { categoryId: id })}
            >
                <Text style={styles.categoryTitle}>{title}</Text>
            </TouchableOpacity>
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: 200,
    height: 200,
    elevation: 0,
  },
   categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 16,
  },
});