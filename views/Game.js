import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';;
import { StyleSheet, View, Image } from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';

import pokemonIdToImageMap from '../utils/pokemonIdToImageMap';

const mockedPokemons = [1, 2, 30, 40, 77, 39, 22, 49, 44, 55];

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  answerInput: {
    marginBottom: 8,
  }
});

const Game = () => {
  const [answerPool, setAnswerPool] = useState([]);
  const [answer, setAnswer] = useState();
  const [questionId, setQuestionId] = useState(0);
  const [questionedPokemonId, setQuestionedPokemonId] = useState(mockedPokemons[0]);

  const navigation = useNavigation();

  useEffect(() => {
    if (questionId > mockedPokemons.length - 1) {
      navigation.navigate('Result', { answerPool });
    }
  }, [answerPool]);

  const handleOnNext = () => {
    setAnswerPool((prevAnswers) => [
      ...prevAnswers,
      {
        pokemonId: questionedPokemonId,
        value: answer,
      }
    ]);

    const nextQuestionId = questionId + 1;
    setQuestionId(nextQuestionId);
    setQuestionedPokemonId(mockedPokemons[nextQuestionId]);
    setAnswer(null);
  }

  return (
    <View style={styles.container}>
      <Title style={{ textAlign: 'center' }}>Who's this Pokémon?</Title>
      <Image
        source={pokemonIdToImageMap[questionedPokemonId]}
        style={{ resizeMode: 'contain', width: '100%', height: 200 }}
      />
      <TextInput
        dense
        style={styles.answerInput}
        label="Your answer"
        placeholder="answer"
        mode="outlined"
        value={answer}
        onChangeText={(value) => {
          setAnswer(value);
        }}
      />
      <Button
        dark
        style={{ borderColor: '#355FA0' }}
        mode="contained"
        color="#F9C934"
        labelStyle={{ color: '#355FA0', fontWeight: 'bold' }}
        disabled={answer == null || answer === ''}
        onPress={handleOnNext}
      >
        Next
      </Button>
    </View>    
  );
};

export default Game;
