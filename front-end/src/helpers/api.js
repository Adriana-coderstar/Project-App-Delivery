import axios from 'axios';

const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

const url = `http://${REACT_APP_HOSTNAME || 'localhost'}:${REACT_APP_BACKEND_PORT || '3001'}`;

const api = axios.create({ baseURL: url });

export const getData = async (endpoint, token) => api.get(endpoint, {
  headers: { Authorization: token },
});

export const postRequest = async (endpoint, body) => api.post(endpoint, body);

export const updateRequest = async (endpoint, body) => api.put(endpoint, body);

export const postRequestToken = async (endpoint, body, token) => api.post(endpoint, body,
  { headers: { Authorization: token } });

export default api;
