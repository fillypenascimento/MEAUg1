import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Router from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <Router />
      </SafeAreaView>
    </>
  );
};

export default App;
