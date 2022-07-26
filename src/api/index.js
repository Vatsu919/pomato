import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const customerSignup = (formData) => API.post("/auth/customerSignup",formData);
export const customerSignin = (formData) => API.post("/auth/login",formData);