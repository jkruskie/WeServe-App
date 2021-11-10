import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import BookmarkScreen from './components/BookmarkScreen';
import HomeScreen from './components/HomeScreen';
import LogScreen from './components/LogScreen';
import MessageScreen from './components/MessageScreen';
import SearchScreen from './components/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      initialRouteName="Home"

      barStyle={{
        backgroundColor: '#005797'
      }}
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 25;

          if (route.name === 'Search') {
            iconName = focused
              ? 'search'
              : 'search-outline';
          } else if (route.name === 'Bookmark') {
            iconName = 'bookmark';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Logs') {
            iconName = 'folder';
          } else if (route.name === 'Messages') {
            iconName = 'chatbubble';
          }
          return <Ionicons name={iconName} size={size} color={color} />;

        },       
        tabBarLabel: false
      })}
      
      
    >
      <Tab.Screen name="Search" component={ SearchScreen } />
      <Tab.Screen name="Bookmark" component={ BookmarkScreen } />
      <Tab.Screen name="Home" component={ HomeScreen } />
      <Tab.Screen name="Logs" component={ LogScreen } />
      <Tab.Screen name="Messages" component={ MessageScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
