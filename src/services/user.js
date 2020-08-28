import axios from 'axios';

const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';

export const getUserInfo = user => (
    axios.get(`${API_PATH_BASE}/users/${user}`)
);