import axios from "axios";


export const api = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL : 'http://localhost:8000/api/',
        headers : {Authorization: "Bearer" + token }
    });
}