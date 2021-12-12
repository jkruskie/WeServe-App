import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import SearchScreen from '../screens/Student/SearchScreen';
import BookmarkScreen from '../screens/Student/BookmarkScreen';
import HomeScreen from '../screens/Student/HomeScreen';
import LogScreen from '../screens/Student/LogScreen';
import MessageScreen from '../screens/Student/MessageScreen';
import HomeStack from './HomeStack';


export default function BottomTabNavigator() {
    const BottomTab = createBottomTabNavigator();
  
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Index"
          screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            // tabBarInactiveBackgroundColor: Colors.navBackground,
            // tabBarActiveBackgroundColor: Colors.navBackground,
            headerShown: true
          }}>
          <BottomTab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'Search',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Bookmark"
            component={BookmarkScreen}
            options={{
              title: 'Bookmarks',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Index"
            component={HomeStack}
            options={{
              title: 'Home',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Log"
            component={LogScreen}
            options={{
              title: 'Logs',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="folder" color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Message"
            component={MessageScreen}
            options={{
              title: 'Messages',
              tabBarShowLabel: false,
              headerShown: false,
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
  