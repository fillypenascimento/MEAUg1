import React from 'react';
import { Text } from 'react-native';

import styles from './style';
import LayoutDrawer from '../../components/LayoutDrawer/LayoutDrawer';
import Container from '../../components/Container/Container';

const Login = (props) => {
  const { navigation, route } = props;

  return (
    <LayoutDrawer navigation={navigation} route={route}>
      <Container>
        <Text style={styles.text}>Login</Text>
      </Container>
    </LayoutDrawer>
  );
};

export default Login;
