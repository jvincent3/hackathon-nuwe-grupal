import {useMutation} from 'react-query'
import {createTeam} from 'api/team'

export function useCreateTeam({queryConfig={}}={}) {
    return useMutation(createTeam, queryConfig)
}