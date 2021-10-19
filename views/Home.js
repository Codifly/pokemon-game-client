import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Title, Caption } from 'react-native-paper';

import pokemonIdToImageMap from '../utils/pokemonIdToImageMap';
import { TokenContext } from '../global/TokenProvider';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
});

function generateRandomId() {
  return Math.floor(Math.random() * 151) + 1;
}

function useGoTo(screen) {
  const navigation = useNavigation();
  return () => {
    navigation.navigate(screen);
  };
}

const Home = () => {
  const [{ username }] = useContext(TokenContext);

  const goToGame = useGoTo('Game');
  const goToLeaderBoard = useGoTo('LeaderBoard');

  const pokemonId = generateRandomId();

  return (
    <View style={styles.container}>
      <Image source={pokemonIdToImageMap[pokemonId]} style={{ resizeMode: 'contain', width: '100%', height: 200 }} />
      <View style={{ alignItems: 'center', marginVertical: 15 }}>
        <Title style={{ lineHeight: 25, textAlign: 'center' }}>{`Let's play a game ${username}!`}</Title>
        <Caption style={{ textAlign: 'center' }}>Can you name all the pokémons?</Caption>
      </View>
      <Button
        dark
        style={{ borderColor: '#355FA0', marginBottom: 10 }}
        mode="contained"
        color="#F9C934"
        labelStyle={{ color: '#355FA0', fontWeight: 'bold' }}
        onPress={goToGame}
      >
        Play!
      </Button>
      <Button
        dark
        style={{ borderColor: '#355FA0' }}
        mode="contained"
        color="#F9C934"
        labelStyle={{ color: '#355FA0', fontWeight: 'bold' }}
        onPress={goToLeaderBoard}
      >
        Leader board
      </Button>
    </View>    
  );
};

export default Home;
