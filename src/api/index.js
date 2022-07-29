import axios from 'axios';

const API = axios.create({baseURL: 'http://pomato-group1.herokuapp.com/'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile'))
    {
        console.log(JSON.parse(localStorage.getItem('profile')));
        req.headers['jwtToken'] = JSON.parse(localStorage.getItem('profile')).authData.jwtToken;
        
        console.log(req.headers);
    }

    return req;
})

export const customerSignup = (formData) => API.post("/customersignup",formData);
export const customerSignin = (formData) => API.post("/login",formData);
export const managerSignUp = (formData) => API.post('/managersignup',formData);
export const getRestaurants = () => API.get('/restaurants');
export const getItems = (restaurantId) => API.get(`/restaurants/getitems/${restaurantId}`);
export const getOrders = (userId) => API.get(`/vieworderscustomer/${userId}`);
export const placeOrder = (formData) => API.post('/placeorder',formData);
export const addItem = (restaurantId,formData) => API.post(`/additem/${restaurantId}`,formData);
export const deleteItem = (restaurantId,itemId,formData) => API.delete(`/deleteitem/${restaurantId}/${itemId}`,formData);
export const updateItem = (restaurantId,itemId,formData) => API.put(`/updateitem/${restaurantId}/${itemId}`,formData);
export const getManagerOrders = (restaurantId,userId) => API.get(`/viewordersmanager/${userId}/${restaurantId}`);