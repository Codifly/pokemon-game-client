import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthProvider from './global/AuthProvider';
import Login from './views/Login';
import Home from './views/Home';
import Game from './views/Game';
import Result from './views/Result';
import Leaderboard from './views/Leaderboard';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFF'
  },
});

export default function App() {
  return (
    <AuthProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="auto" />
        <Login />
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}
