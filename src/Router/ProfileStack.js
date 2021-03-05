import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
