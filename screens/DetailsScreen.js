import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
export default function DetailsScreen({ route, navigation }) {
  const { categoryId } = route.params;

  return (
    <View>
      <AppHeader title="Details" navigation={navigation} />
      <Text>DetailsScreen {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
});
