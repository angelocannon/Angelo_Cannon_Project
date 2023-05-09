import axios from 'axios';
import { API_ENDPOINT } from './apiEndPoint';

const headers = {
    'Authorization': 'Bearer sk3EpCfzF1tjwOzthgkT'
};

export const getMovies = async () => {
    const response = await axios.get(`${API_ENDPOINT}movie`, { headers });
    return response.data.docs;
};

export const getCharacters = async () => {
    const response = await axios.get(`${API_ENDPOINT}character`, { headers });
    return response.data.docs;
};

export const getQuotes = async () => {
    const response = await axios.get(`${API_ENDPOINT}quote`, { headers });
    return response.data.docs;
};