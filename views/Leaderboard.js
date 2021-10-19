import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, List } from 'react-native-paper';

import LoadingView from '../components/LoadingView';
import API from '../global/API';
import useApiRequest from '../utils/useApiRequest';

const Leaderboard = () => {
  const [fetchLeaderboard, { loading, data: results = [] }] = useApiRequest(API.getLeaderboard);

  return (
    <View>
    </View>
  );
};

export default Leaderboard;