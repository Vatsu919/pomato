import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const customerSignup = (formData) => API.post("/customersignup",formData);
export const customerSignin = (formData) => API.post("/login",formData);
export const managerSignUp = (formData) => API.post('/managersignup',formData);
export const getRestaurants = () => API.get('/auth/restaurants');