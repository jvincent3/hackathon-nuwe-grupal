import React from 'react'
import {Flex, Box, Text, UnorderedList, ListItem, Link, Icon} from '@chakra-ui/react'
import {useGetUserRepos} from 'hooks/queries/githubuser'
import Loading from 'components/Loading'
import {HiOutlineStar} from 'react-icons/hi'

function RepoList({userData}) {

    const {isLoading, error, data, refetch} = useGetUserRepos({params: {username: userData.login, queryFn: userData}})

    if ( isLoading ) return <Loading/>

    if ( error ) return <Text textAlign="center">User not found...</Text>

    return (
        <Box>
            {!isLoading &&
            <>
                { data.length !== 0 ?
                    <UnorderedList listStyleType="none" ml="0">
                        { data.map((value, index) => (
                            <ListItem   
                                    key={"repost"+ index}
                                    p="15px" 
                                    cursor="pointer"
                                    backgroundColor="#343f56" 
                                    borderRadius="5px" 
                                    my="10px" 
                                    transition=".5s" 
                                    _hover={{boxShadow: "0px 0px 8px 2px #ffffff5c"}}>
                                <Flex justifyContent="space-between">
                                    <Box>
                                        <Box mb="20px">
                                            <Text fontSize="xl"><Link href={value.html_url} target="_blank">{value.name}</Link></Text>
                                        </Box>
                                        <Box>
                                            <Text>{value.language}</Text>
                                        </Box>
                                    </Box>
                                    <Box>
                                        { value.stargazers_count > 0 &&
                                        <Flex>
                                            <Box alignSelf="center">
                                                <Text mt="2px">{ value.stargazers_count}</Text>
                                            </Box>
                                            <Box alignSelf="center" ml="5px">
                                                <Icon  as={HiOutlineStar} fontSize="18px" _hover={{color: "#00BFA6"}}/>
                                            </Box>
                                        </Flex>
                                        }
                                    </Box>
                                </Flex>
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
