import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Logo from '../assets/whosThatPokemon_splash.png';
import { TokenContext } from '../global/TokenProvider';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  usernameInput: {
    marginBottom: 8,
  }
});

const Login = () => {
  const [username, setUsername] = useState();
  const [, setToken] = useContext(TokenContext);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // Reset the input when returning
  // to the login screen
  useEffect(() => {
    if(isFocused) {
      setUsername(null);
    }
  }, [isFocused]);

  const handleLogin = () => {
    setToken({ username, token: null });
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ resizeMode: 'contain', width: '100%', height: 200 }} />
      <Headline style={{ marginVertical: 0, marginTop: 10 }}>Login</Headline>
      <TextInput
        dense
        style={styles.usernameInput}
        label="Username"
        placeholder="username"
        mode="outlined"
        value={username}
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <Button
        dark
        style={{ borderColor: '#355FA0' }}
        mode="contained"
        color="#F9C934"
        labelStyle={{ color: '#355FA0', fontWeight: 'bold' }}
        onPress={handleLogin}
        disabled={username == null || username === ''}
      >
        Go!
      </Button>
    </View>    
  );
};

export default Login;
