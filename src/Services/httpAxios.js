import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const httpAxios = axios.create({
    baseURL: apiUrl,
});

export const httpAxiosJwt = axios.create({
    baseURL: apiUrl, 
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}` 
    }
});
