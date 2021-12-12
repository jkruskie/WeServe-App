import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/Student/HomeScreen';
import OpportunityScreen from '../screens/Student/OpportunityScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeStack() {
    const Stack = createNativeStackNavigator();
  
    return (
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            // headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Opportunity" component={OpportunityScreen}
                options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: 'black'
                }}
            />
        </Stack.Navigator>
    );
  }

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -10 }} {...props} />;
  }
  