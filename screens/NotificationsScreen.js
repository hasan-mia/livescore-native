import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotificationsScreen({ navigation }) {
  return (
    <View>
      <AppHeader title="Notifications" navigation={navigation} />
      <Text>Notifications</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});