import {useMutate} from 'react-query'
import {login, register} from 'api/user'

export function useLogin({queryConfig={}}) {
    return useMutate(login(), queryConfig)
}

export function userRegister({queryConfig={}}) {
    return useMutate(login(), queryConfig)
}