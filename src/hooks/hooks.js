// hooks.js
import axios from 'axios';

export const api = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
};

export const publicApi = () => {
  return axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
