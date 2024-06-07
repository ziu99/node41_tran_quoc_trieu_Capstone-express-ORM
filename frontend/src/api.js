import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

export const registerUser = (userData) => axios.post(`${API_URL}/user/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/user/login`, userData);
export const fetchImages = () => axios.get(`${API_URL}/image/list`);
export const fetchImageById = (imageId) => axios.get(`${API_URL}/image/image-info/${imageId}`);
