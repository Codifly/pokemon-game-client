import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

import Logo from '../assets/whosThatPokemon_splash.png';
import { AuthContext } from '../global/AuthProvider';
import API from '../global/API';
import useApiRequest from '../utils/useApiRequest';
import PokemonButton from '../components/PokemonButton';
import useGoTo from '../utils/useGoTo';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  textInput: {
    marginBottom: 12,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
  },
  button: {
    marginBottom: 4,
  }
});

const Login = () => {
  const goToHome = useGoTo('Home');
  const [auth, setAuth] = useContext(AuthContext);
  const [login, { loading, data, error }] = useApiRequest(API.login);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(() => {
    login({ username, password });
  });

  useEffect(() => {
    if (data?.token) {
      setUsername('');
      setPassword('');
      setAuth({ token: data.token, username: username });
    }
  }, [data, goToHome, setAuth, setUsername, setPassword]);

  useEffect(() => {
    if (auth?.token) {
      goToHome();
    }
  }, [auth, goToHome]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <TextInput
        style={styles.textInput}
        label="Username"
        placeholder="username"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        label="Password"
        placeholder="password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleLogin}
        returnKeyType="go"
        autoCapitalize="none"
      />
      <PokemonButton
        loading={loading}
        onPress={handleLogin}
        disabled={!username || !password}
        style={styles.button}
      >
        Go!
      </PokemonButton>
      <HelperText type="error" visible={error}>
        {error?.message}
      </HelperText>
    </View>
  );
};

export default Login;
