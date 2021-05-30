import {useMutation} from 'react-query'
import {login, register} from 'api/user'

export function useLogin({queryConfig={}}={}) {
    return useMutation(login, queryConfig)
}

export function useRegister({queryConfig={}}={}) {
    return useMutation(register, queryConfig)
}