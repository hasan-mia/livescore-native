import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
  
  return (
    <View>
      <AppHeader title="Profile" navigation={navigation} />
      <Text>Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});