import axios from 'axios'
import store from '../store'

const token = localStorage.getItem('token')

const instance = axios.create({
    baseUrl: import.meta.env.VUE_APP_URL_API,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

instance.interceptors.request.use((config) => {
    if (store.getters.auth.token) {
        config.headers["Authorization"] = "Bearer " + store.getters.auth.token;
    }
    return config;
})

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

export default instance
