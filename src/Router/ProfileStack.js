import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';
import PetInfo from '../pages/PetInfo/PetInfo';

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
      {/* MUDAR!!! ISSO NÃO DEVE FICAR AQUI. */}
      <Stack.Screen name="PetInfo" component={PetInfo} /> 
    </Stack.Navigator>
  );
};

export default ProfileStack;
