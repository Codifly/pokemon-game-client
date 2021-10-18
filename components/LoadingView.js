import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <Button loading>Loading...</Button>
    </View>
  )
}

export default LoadingView;