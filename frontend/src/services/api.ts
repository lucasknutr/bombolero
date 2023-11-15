import axios from 'axios';

// todo: definir .env pra comunicar com o axios

export const app = axios.create({
    baseURL: 'http://localhost:3333',
});