import React from 'react'
import {Box, Text, UnorderedList, ListItem, Link} from '@chakra-ui/react'
import {useGetUserRepos} from 'hooks/queries/githubuser'
import Loading from 'components/Loading'

function RepoList({userData}) {

    const {isLoading, error, data, refetch} = useGetUserRepos({params: {username: userData.login, queryFn: userData}})

    if ( isLoading ) return <Loading/>

    if ( error ) return <Text textAlign="center">User not found...</Text>

    return (
        <Box>
            {!isLoading &&
            <>
                { data.length !== 0 ?
                    <UnorderedList listStyleType="none">
                        { data.map((value, index) => (
                            <ListItem   
                                        key={"repost"+ index}
                                        p="20px" 
                                        cursor="pointer"
                                        backgroundColor="#343f56" 
                                        borderRadius="5px" 
                                        my="10px" 
                                        transition=".5s" 
                                        _hover={{boxShadow: "0px 0px 8px 2px #ffffff5c"}}>
                                <Box>
                                    <Text fontSize="xl"><Link href={value.html_url} target="_blank">{value.name}</Link></Text>
                                    <Text></Text>
                                </Box>
                            </ListItem>
                        ))
                        }
                    </UnorderedList>
                    : 
                    <Box>
                        <Text fontSize="2xl">User has no repositories</Text>
                    </Box>
                }
            </>
            }
        </Box>
    )
}

export default RepoList
