import {useMutation} from 'react-query'
import {login, register, searchUsers} from 'api/user'

export function useLogin({queryConfig={}}={}) {
    return useMutation(login, queryConfig)
}

export function useRegister({queryConfig={}}={}) {
    return useMutation(register, queryConfig)
}

export function useSearchUsers({queryConfig={}}={}) {
    return useMutation(searchUsers, queryConfig)
}