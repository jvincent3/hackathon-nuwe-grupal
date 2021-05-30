import axios from 'axios'

 export function login(params) {
    return axios({
        method: "post",
        url: `http://localhost:5000/api/user/login`,
        data: {
            username: params.username,
           password: params.password
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
}

export function register(params) {
    return axios({
        method: "post",
        url: `http://localhost:5000/api/user/signin`,
        data: {
            username: params.username,
            first_name: params.firstName,
            last_name: params.lastName,
            email: params.email,
            password: params.password,
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
}

export function searchUsers(params) {
    return axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${params.username}&per_page=10`,
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
}