import axios from 'axios'
import auth from 'githubAuth'

 export function getGithubUser(params) {
    return axios({
        method: "get",
        url: `https://api.github.com/users/${params.username}`,
        auth: auth,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

 export function getUserRepos(params) {
    return axios({
        method: "get",
        url: `https://api.github.com/users/${params.username}/repos`,
        auth: auth,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}