import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen'
import AppBottomTabNavigator from './AppBottomTabNavigator';

const Stack = createStackNavigator();

function SignInStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
        />
        <Stack.Screen 
          name="Home" 
          component={AppBottomTabNavigator}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignInStackNavigator;