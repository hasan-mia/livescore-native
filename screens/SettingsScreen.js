import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View>
      <View>
        <AppHeader title="Settings" navigation={navigation} />
        <Text>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});