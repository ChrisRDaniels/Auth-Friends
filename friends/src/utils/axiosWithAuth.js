import axios from 'axios';

// module that creates a new instance of the axios object
// baseURL
// headers object -> authorization header with the token

export const axiosWithAuth = () => {

    return axios.create({

        const token = localStorage.getItem('token');

        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token
        }
    });
};