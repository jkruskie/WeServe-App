import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import NewScreen from '../screens/Organization/NewScreen';
import HomeScreen from '../screens/Organization/HomeScreen';
import MessageScreen from '../screens/Organization/MessageScreen';


export default function BottomTabNavigator() {
    const BottomTab = createBottomTabNavigator();
  
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            // tabBarInactiveBackgroundColor: '#005797',
            // tabBarActiveBackgroundColor: '#005797',
            headerShown: false
          }}>
          <BottomTab.Screen
            name="Search"
            component={NewScreen}
            options={{
              title: 'New',
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Message"
            component={MessageScreen}
            options={{
              title: 'Messages',
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} />,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -10 }} {...props} />;
  }
  