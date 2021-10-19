import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Caption } from 'react-native-paper';

import pokemonIdToImageMap from '../utils/pokemonIdToImageMap';
import { AuthContext } from '../global/AuthProvider';
import PokemonButton from '../components/PokemonButton';
import generateRandomPokemonId from '../utils/generateRandomPokemonId';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    lineHeight: 25,
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
  },
  playButton: {
    marginBottom: 16,
  },
});

const Home = () => {
  const [{ username }] = useContext(AuthContext);

  const [pokemonId] = useState(generateRandomPokemonId());

  return (
    <View style={styles.container}>
      <Image source={pokemonIdToImageMap[pokemonId]} style={styles.image} />
      <View style={styles.textContainer}>
        <Title style={styles.title}>
          {`Let's play a game ${username}!`}
        </Title>
        <Caption style={styles.caption}>
          Can you name all the pokémons?
          </Caption>
      </View>
      <PokemonButton style={styles.playButton}>
        Play!
      </PokemonButton>
      <PokemonButton>
        Leader board
      </PokemonButton>
    </View>
  );
};

export default Home;
