import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Logo from '../assets/whosThatPokemon_splash.png';
import { AuthContext } from '../global/AuthProvider';
import API from '../global/API';
import useApiRequest from '../utils/useApiRequest';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  textInput: {
    marginBottom: 8,
  }
});

const Login = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, data, error }] = useApiRequest(API.login);

  const [, setAuth] = useContext(AuthContext);

  const handleLogin = useCallback(() => {
    login({ username, password });
  });

  useEffect(() => {
    if (data?.token) {
      setAuth({ token: data.token, username: username });
      navigation.navigate('Home');
      setUsername('');
      setPassword('');
    }
  }, [data, navigation, setAuth, setUsername, setPassword]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ resizeMode: 'contain', width: '100%', height: 200 }} />
      <TextInput
        style={styles.textInput}
        label="Username"
        placeholder="username"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        label="Password"
        placeholder="password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        dark
        mode="contained"
        loading={loading}
        onPress={handleLogin}
        disabled={username == null || username === ''}
      >
        Go!
      </Button>
    </View>
  );
};

export default Login;
