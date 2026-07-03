import axios from "axios"

const API_URL = 'https://wedev-api.sky.pro/api/user'

export async function signUp(userData) {
    try {
        const response = await axios.post(API_URL, userData, {
            headers: { 'Content-Type': '' }
        })

        return response.data.user;
    } catch (error) {
        throw new Error(error.response?.data?.error, {cause: error});
    }
}

export async function signIn({ login, password }) {
    try {
        const response = await axios.post(API_URL + '/login', 
            { login, password }, 
            { headers: {'Content-Type': ''} })

        return response.data.user;
    } catch (error) {
        throw new Error(error.response?.data?.error, {cause: error});
    }
}

