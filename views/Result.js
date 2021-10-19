import React from 'react';
import { View } from 'react-native';

import useApiRequest from '../utils/useApiRequest';
import API from '../global/API';

const Result = () => {
  const [submitQuestions, { loading, data }] = useApiRequest(API.submitQuestions);

  return (
    <View>
    </View>
  );
};

export default Result;
