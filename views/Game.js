import React, { useState } from 'react';;
import { StyleSheet, View, Image } from 'react-native';
import { Title, TextInput } from 'react-native-paper';

import API from '../global/API';
import pokemonIdToSilhouetteMap from '../utils/pokemonIdToSilhouetteMap';
import useApiRequest from '../utils/useApiRequest';
import PokemonButton from '../components/PokemonButton';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  textInput: {
    marginBottom: 8,
    marginTop: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    opacity: 0.5
  },
});

const Game = () => {
  const [fetchQuestions, { loading, data: questions = [] }] = useApiRequest(API.getQuestions);

  const [answer, setAnswer] = useState('');

  const handlePress = () => {
    console.log('answer', answer);
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Who's this Pokémon?</Title>
      <Image
        source={pokemonIdToSilhouetteMap[1]}
        style={styles.image}
      />
      <TextInput
        dense
        style={styles.textInput}
        label="Your answer"
        placeholder="answer"
        mode="outlined"
        value={answer}
        onChangeText={setAnswer}
        autoCorrect={false}
        returnKeyType="go"
        autoCapitalize="none"
      />
      <PokemonButton>
        Next
      </PokemonButton>
    </View>
  );
};

export default Game;
