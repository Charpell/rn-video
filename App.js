/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </View>
  );
};

export default App;
