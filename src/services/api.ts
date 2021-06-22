import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discord.com/api'
});

export { api }