import React from 'react';
import { SafeAreaView } from 'react-native';
import colors from './src/BaseStyle/colors';
import StatusBar from './src/components/StatusBar/StatusBar'

import Router from './src/Router/Router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.lightBlueStatus}/>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <Router />
      </SafeAreaView>
    </>
  );
};

export default App;
