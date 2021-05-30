import {useQuery} from 'react-query';
import {getGithubUser, getUserRepos} from 'api/githubuser'
import {useHistory} from 'react-router-dom'

export function useGetGithubUser({params}, queryConfig={}) {
    return useQuery(useHistory().location.pathname, () => getGithubUser(params),queryConfig)
}

export function useGetUserRepos({params}, queryConfig={}) {
    return useQuery(params.queryFn.login, () => getUserRepos(params),queryConfig)
}