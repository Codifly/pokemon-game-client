import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
});

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <List.Item
        title="Name"
        description="Item description"
        left={props => <Avatar.Text size={48} label="1" />}
      />
      <List.Item
        title="Name"
        description="Item description"
        left={props => <Avatar.Text size={48} label="2" />}
      />
    </View>
  );
};

export default Leaderboard;