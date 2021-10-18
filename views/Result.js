import React from 'react';;
import { useNavigation, useRoute } from '@react-navigation/core';
import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';
import { Button, Title, List } from 'react-native-paper';

import pokemonIdToSpriteMap from '../utils/pokemonIdToSpriteMap';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  answerInput: {
    marginBottom: 8,
  }
});

const Result = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <Title style={{ textAlign: 'center', marginBottom: 15 }}>You scored: 10/10</Title>
      <ScrollView showsVerticalScrollIndicator style={{ maxHeight: 400 }}>
        {(params?.answerPool ?? []).map((item, index) => (
          <List.Item
            key={item.value + index}
            title={`No. ${item.pokemonId}`}
            description={`"${item.value}"`}
            left={() => (
              <Image
                source={pokemonIdToSpriteMap[item.pokemonId]}
                // Setting opacity to 0.5 if not correct maybe?
                style={{ resizeMode: 'contain', width: 50, height: 50 }}
              />
            )}
          />
        ))}
      </ScrollView>
      <Button
        dark
        style={{ borderColor: '#355FA0', marginTop: 15 }}
        mode="contained"
        color="#F9C934"
        labelStyle={{ color: '#355FA0', fontWeight: 'bold' }}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        Go to home
      </Button>
    </View>    
  );
};

export default Result;
