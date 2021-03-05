import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/Home';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Home} />
      <Stack.Screen name="Edit" component={Home} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
