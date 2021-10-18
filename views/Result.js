import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StyleSheet, View, Image, FlatList, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Title, List, Text, Colors, DefaultTheme } from 'react-native-paper';

import pokemonIdToSpriteMap from '../utils/pokemonIdToSpriteMap';
import useApiRequest from '../utils/useApiRequest';
import API from '../global/API';
import PokemonButton from '../components/PokemonButton';
import useGoTo from '../utils/useGoTo';
import LoadingView from '../components/LoadingView';

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  text: {
    ...DefaultTheme.fonts.thin,
    textAlign: 'center',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  answerInput: {
    marginBottom: 8,
  }
});

const Result = () => {
  const goToHome = useGoTo('Home');
  const { params } = useRoute();
  const [submitQuestions, { loading, data }] = useApiRequest(API.submitQuestions);

  useEffect(() => {
    submitQuestions(params.answerPool);
  }, []);

  if (loading) {
    return <LoadingView />;
  }

  const { score, time = 0, highscore, results } = (data || {});

  return (
    <SafeAreaView style={{ width: '100%', flex: 1 }}>
      <View style={styles.container}>
        <Title style={styles.title}>You scored {score}/10</Title>
        <Text style={styles.text}>{time / 1000}s</Text>
        <ScrollView showsVerticalScrollIndicator style={styles.scrollView}>
          {(results || []).map(({ correctAnswer, answer, correct, pokemonId }, index) => (
            <List.Item
              key={correctAnswer + index}
              title={correctAnswer}
              description={`No. ${pokemonId}`}
              left={() => (
                <Image
                  source={pokemonIdToSpriteMap[pokemonId]}
                  style={{ resizeMode: 'contain', width: 50, height: 50 }}
                />
              )}
              right={() => (
                <Text style={{ color: correct ? Colors.green300 : Colors.red300, lineHeight: 50, fontWeight: 'bold' }}>"{answer || 'empty'}"</Text>
              )}
            />
          ))}
        </ScrollView>
        <PokemonButton onPress={goToHome}>
          Go to home
        </PokemonButton>
      </View>
    </SafeAreaView>
  );
};

export default Result;
