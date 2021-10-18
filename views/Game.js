import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';;
import { StyleSheet, View, Image } from 'react-native';
import { Title, TextInput } from 'react-native-paper';

import API from '../global/API';
import pokemonIdToSilhouetteMap from '../utils/pokemonIdToSilhouetteMap';
import useApiRequest from '../utils/useApiRequest';
import PokemonButton from '../components/PokemonButton';
import useGoTo from '../utils/useGoTo';
import LoadingView from '../components/LoadingView';

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
  const goToResult = useGoTo('Result');
  const [fetchQuestions, { loading, data: questions = [] }] = useApiRequest(API.getQuestions);

  const [answerPool, setAnswerPool] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');

  const pokemonId = questions[questionIndex];
  const image = pokemonIdToSilhouetteMap[pokemonId];

  const handleNext = () => {
    setAnswerPool((answers) => [
      ...answers,
      {
        pokemonId,
        answer,
      }
    ]);

    setQuestionIndex(questionIndex + 1);
    setAnswer('');
  }

  useEffect(() => {
    if (answerPool.length === 10) {
      goToResult({ answerPool });
    }
  }, [answerPool, questions]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Who's this Pokémon?</Title>
      <Image
        source={image}
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
        onSubmitEditing={handleNext}
        returnKeyType="go"
        autoCapitalize="none"
      />
      <PokemonButton onPress={handleNext}>
        Next
      </PokemonButton>
    </View>
  );
};

export default Game;
