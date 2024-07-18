import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Router />
    </SafeAreaView>
  );
};

export default App;

export const colors = {
  GREY: '#d0d5dc',
  BLUE: '#1992fe',
};

export const globalStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    width: '90%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
  },
});
