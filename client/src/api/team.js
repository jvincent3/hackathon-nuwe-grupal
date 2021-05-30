import axios from 'axios'

 export function createTeam(params) {
    return axios({
        method: "post",
        url: `http://localhost:5000/api/team/teamname`,
        data: {
            name: params.name,
            members : params.members,
            description: params.description
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
}