import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';

import NotLoggedDrawerContent from '../components/NotLoggedDrawerContent/NotLoggedDrawerContent';
import LoggedDrawerContent from '../components/LoggedDrawerContent/LoggedDrawerContent';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ProfileStack from './ProfileStack';
import PetStack from './PetStack';
import PetList from '../pages/PetList/PetList'
import PetRegister from '../pages/PetRegister/PetRegister';
import Notifications from '../pages/Notifications/Notifications';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const noAnimation = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

class Router extends Component {
  state = {
    logged: false,
  };

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
      }
    });
  }

  notLogedRoutes = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => <NotLoggedDrawerContent {...props} />}
      >
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    );
  };

  logedRoutes = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <LoggedDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={PetStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen name="Lista de Adoção" component={PetList} />
        <Drawer.Screen name="Cadastro Pet" component={PetRegister} />
        <Drawer.Screen name="Notificações" component={Notifications} />
        {/* <Drawer.Screen name="Detalhe Pet" component={PetInfo} /> */}
      </Drawer.Navigator>
    );
  };

  render() {
    const { logged } = this.state;
    return (
      <NavigationContainer>
        {logged ? this.logedRoutes() : this.notLogedRoutes()}
      </NavigationContainer>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.UserReducer.user,
// });

export default Router;
