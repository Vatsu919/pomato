import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3200'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile'))
    {
        console.log(JSON.parse(localStorage.getItem('profile')));
        req.headers['jwtToken'] = JSON.parse(localStorage.getItem('profile')).jwtToken;
        
        console.log(req.headers);
    }

    return req;
})

export const customerSignup = (formData) => API.post("/customersignup",formData);
export const customerSignin = (formData) => API.post("/login",formData);
export const managerSignUp = (formData) => API.post('/managersignup',formData);
export const getRestaurants = () => API.get('/restaurants');
export const getItems = (restaurantId) => API.get(`/restaurants/getitems/${restaurantId}`);
export const getOrders = (userId) => API.get(`/viewOrdersCustomer/${userId}`);