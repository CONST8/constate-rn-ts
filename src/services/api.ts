import {API_BASE} from '@env'
import axios from 'axios';

const api = axios.create({
  baseURL: API_BASE,
});

export default api;
