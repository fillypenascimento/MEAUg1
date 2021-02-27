import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';

import Home from './pages/Home/Home';

const Stack = createStackNavigator();

const noAnimation = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

class Router extends Component {
  notLogedRoutes = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Home} />
        <Stack.Screen name="Login" component={Home} />
      </Stack.Navigator>
    );
  };

  logedRoutes = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            transitionSpec: {
              open: noAnimation,
              close: noAnimation,
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  render() {
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     return <NavigationContainer>{this.logedRoutes()}</NavigationContainer>;
    //   } else {
    //     return <NavigationContainer>{this.notLogedRoutes()}</NavigationContainer>;
    //   }
    // });
    return <NavigationContainer>{this.notLogedRoutes()}</NavigationContainer>;
  }
}

// const mapStateToProps = (state) => ({
//   user: state.UserReducer.user,
// });

export default Router;
