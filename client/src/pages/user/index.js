import React from 'react'
import {useParams} from 'react-router-dom'
import {Box, Avatar, Text, Flex, useMediaQuery} from '@chakra-ui/react'
import {useGetGithubUser} from 'hooks/queries/githubuser'
import RepoList from './RepoList'
import Loading from 'components/Loading'
import UserNotFound from 'components/Error/UserNotFound'

function User() {

    const {username} = useParams()
    const {isLoading, error, data} = useGetGithubUser({params: {username: username}})
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)")

    if ( isLoading ) return <Loading/>

    if ( error ) return <UserNotFound/>

    return (
        <>
        {( !isLoading ) &&
            <>
                <Box pt="100px" px="10px">
                    <Box maxWidth="800px" mx="auto">
                        {isLargerThan600 ? 
                        //User profile card for tablets and desktop
                        <Flex mb="20px" p="20px" borderRadius="5px" backgroundColor="#222a3a" justifyContent="space-between">
                            <Flex>
                                <Box alignSelf="center">
                                    <Avatar size="2xl" src={data.avatar_url}/>
                                </Box>
                                <Box alignSelf="center" pl="20px">
                                    <Text fontSize="3xl">{data.name}</Text>
                                    <Text fontSize="xl">{data.login}</Text>
                                </Box>
                            </Flex>
                            <Box alignSelf="center">
                                <Text fontSize="2xl">Total Repos: {data.public_repos}</Text>
                            </Box>
                        </Flex>
                        :
                        //User profile card for mobile
                        <Box mb="20px" p="20px" borderRadius="5px" backgroundColor="#222a3a" >
                            <Flex justifyContent="space-between">
                                <Box alignSelf="center">
                                    <Avatar size="xl" src={data.avatar_url}/>
                                </Box>
                                <Box alignSelf="center" pl="20px">
                                    <Text textAlign="right" fontSize="xl">{data.name}</Text>
                                    <Text textAlign="right" fontSize="md">{data.login}</Text>
                                </Box>
                            </Flex>
                            <Box>
                                <Text textAlign="right" fontSize="xl">Total Repos: {data.public_repos}</Text>
                            </Box>
                        </Box>
                        }
                        <Box p={{base:"10px", md: "20px"}} borderRadius="5px" backgroundColor="#222a3a">
                            <RepoList userData={data}/>
                        </Box>
                    </Box>
                </Box>
            </>
        }
        </>
    )
}

export default User
