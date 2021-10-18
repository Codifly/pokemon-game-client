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
  return data;
}

const login = async (variables) => {
  const data = await post('/login', variables);
  return data;
}

const getLeaderboard = async () => {
  const data = await get('/leaderboard');
  return data;
}

const API = {
  login,
  getLeaderboard,
}

export default API;