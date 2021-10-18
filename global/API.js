const URI = 'https://pokemon-game-server.herokuapp.com';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const post = async (url, body = {}, options = {}) => {
  const response = await fetch(`${URI}${url}`, {
    method: 'POST',
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (response.status >= 400) {
    const error = new Error(data.message);
    error.code = data.code;
    throw error;
  } 
  return data;
}

const get = async (url, options = {}) => {
  const response = await fetch(`${URI}${url}`, {
    method: 'GET',
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
  const data = await response.json();
  if (response.status >= 400) {
    const error = new Error(data.message);
    error.code = data.code;
    throw error;
  } 
  return data;
}

const login = async (variables, options) => {
  const data = await post('/login', variables, options);
  return data;
}

const getLeaderboard = async (variables, options) => {
  const data = await get('/leaderboard', options);
  return data;
}

const getQuestions = async (variables, options) => {
  const data = await get('/questions', options);
  return data;
}

const submitQuestions = async (variables, options) => {
  const data = await post('/questions', variables, options);
  return data;
}

const API = {
  login,
  getLeaderboard,
  getQuestions,
  submitQuestions,
}

export default API;