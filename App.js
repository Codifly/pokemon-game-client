import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthProvider from './global/AuthProvider';
import Views from './views';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    width: '100%',
    height: '100%',
  }
});

export default function App() {
  return (
    <AuthProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <StatusBar style="auto" />
        <Views />
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}
