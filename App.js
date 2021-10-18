import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  keyboardAvoidingView: {
    width: '100%',
    height: '100%',
  }
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Game" component={Game} />
              <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
              <Stack.Screen name="Leaderboard" component={Leaderboard} />
            </Stack.Navigator>
          </NavigationContainer>
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}
