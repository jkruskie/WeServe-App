import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/redux';

import LoginScreen from '../screens/Authentication/LoginScreen';
import ForgotPasswordScreen from '../screens/Authentication/ForgotPasswordScreen';

import StudentNavigator from './StudentStack';
import OrganizationNavigator from './OrganizationStack';

export default function Navigation() {

  const userToken = useSelector((state: RootState) => state.user.authToken);
  const userType = useSelector((state: RootState) => state.user.type);

  function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                // headerShown: false
            }}
            >
              <Stack.Screen name="Login" component={LoginScreen}
                options={{
                  headerShown: false,
                }}/>
              <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: true,
                  headerTintColor: 'black'
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

  if(userToken) {
    // User is authenticated
    console.log("USER IS A: " + userType);
    switch(userType) {
      case "student": {
        return StudentNavigator();
      }
      case "organization": {
        return OrganizationNavigator();
      }
      default: {
        return AuthStack();
      }
    }
  } else {
    return AuthStack();
  }
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -10 }} {...props} />;
}
