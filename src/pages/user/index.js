import React from 'react'
import {useParams} from 'react-router-dom'
import {Box, Avatar, Text, Flex} from '@chakra-ui/react'
import {useGetGithubUser} from 'hooks/queries/githubuser'
import RepoList from './RepoList'
import Loading from 'components/Loading'
import UserNotFound from 'components/Error/UserNotFound'

function User() {

    const {username} = useParams()
    const {isLoading, error, data} = useGetGithubUser({params: {username: username}})

    if ( isLoading ) return <Loading/>

    if ( error ) return <UserNotFound/>

    return (
        <>
        {( !isLoading ) &&
            <>
            { !data.message ?
                <Box pt="100px" px="10px">
                    <Box maxWidth="800px" mx="auto">
                        <Flex mb="20px" p="20px" borderRadius="5px" backgroundColor="#222a3a" justifyContent="space-between">
                            <Flex>
                                <Box alignSelf="center">
                                    <Avatar size="lg" src={data.avatar_url}/>
                                </Box>
                                <Box alignSelf="center" pl="10px">
                                    <Text fontSize="3xl">{data.login}</Text>
                                </Box>
                            </Flex>
                            <Box>
                                <Text>Total Repos: {data.public_repos}</Text>
                            </Box>
                        </Flex>
                        <Box p="20px" borderRadius="5px" backgroundColor="#222a3a">
                            <RepoList userData={data}/>
                        </Box>
                    </Box>
                </Box>
                :
                <UserNotFound/>
            }
            </>
        }
        </>
    )
}

export default User
