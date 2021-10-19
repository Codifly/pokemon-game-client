import React from 'react';
import { View } from 'react-native';

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