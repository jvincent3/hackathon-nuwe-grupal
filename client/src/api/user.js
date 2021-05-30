import axios from 'axios'

 export function login(params) {
    return axios({
        method: "post",
        url: `/api/user/login`,
        headers: {
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
        url: `/api/user/signin`,
        headers: {
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