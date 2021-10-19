import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthProvider from './global/AuthProvider';

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
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}
