import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './src/login/login.js'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
