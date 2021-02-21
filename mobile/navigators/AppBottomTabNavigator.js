import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import WishlistScreen from '../screens/WishlistScreen'
import GroupsScreen from '../screens/GroupsScreen'
import ProfileScreen from '../screens/ProfileScreen'


const Tab = createBottomTabNavigator();

function AppBottomTabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="WishList" component={WishlistScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default AppBottomTabNavigator;