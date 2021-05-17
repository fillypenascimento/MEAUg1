import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PetInfo from '../pages/PetInfo/PetInfo';
import Home from '../pages/Home/Home';

const Stack = createStackNavigator();

const PetStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PetInfo" component={PetInfo} />
    </Stack.Navigator>
  );
};

export default PetStack;
