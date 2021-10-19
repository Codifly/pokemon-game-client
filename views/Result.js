import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StyleSheet, View, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { Title, List, Text, Colors, DefaultTheme } from 'react-native-paper';

import pokemonIdToSpriteMap from '../utils/pokemonIdToSpriteMap';
import useApiRequest from '../utils/useApiRequest';
import API from '../global/API';
import PokemonButton from '../components/PokemonButton';
import useGoTo from '../utils/useGoTo';
import LoadingView from '../components/LoadingView';

const Result = () => {
  const [submitQuestions, { loading, data }] = useApiRequest(API.submitQuestions);

  return (
    <View>
    </View>
  );
};

export default Result;
