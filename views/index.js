import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import Game from './Game';
import Result from './Result';
import Leaderboard from './Leaderboard';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFF'
  },
});

const Stack = createNativeStackNavigator();

const Page = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Page;