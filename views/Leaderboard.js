import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, List } from 'react-native-paper';

import LoadingView from '../components/LoadingView';
import API from '../global/API';
import useApiRequest from '../utils/useApiRequest';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollView: {
    paddingHorizontal: 16,
    height: '100%',
  }
});

const Leaderboard = () => {
  const [fetchLeaderboard, { loading, data: results = [] }] = useApiRequest(API.getLeaderboard);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  if (loading) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {results.map(({ name, position, score, time }) => (
          <List.Item
            key={name}
            title={name}
            description={`${score || 0}/10 ${(time || 0) / 1000}s`}
            left={() => <Avatar.Text size={48} label={position} />}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Leaderboard;