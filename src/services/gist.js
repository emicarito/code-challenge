import axios from 'axios';

const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';


export const getAllGist = user => (
  axios.get(`${API_PATH_BASE}/users/${user}/gists`)
);

export const getGist = id => (
  axios.get(`${API_PATH_BASE}/gists/${id}`)
);