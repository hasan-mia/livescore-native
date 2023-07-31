import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
