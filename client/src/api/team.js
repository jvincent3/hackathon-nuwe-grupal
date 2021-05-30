import axios from 'axios'

 export function createTeam(params) {
    return axios({
        method: "post",
        url: `http://localhost:5000/api/team/teamname`,
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