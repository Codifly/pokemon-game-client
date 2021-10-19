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

const Game = () => {
  return (
    <View>
    </View>
  );
};

export default Game;
