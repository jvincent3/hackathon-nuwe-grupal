import React from 'react'
import {useHistory} from 'react-router-dom'
import {Box, Flex, Text, Grid} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function DesktopNavbar() {

    const history = useHistory()

    return (
        <Flex minHeight="80px" p="20px" justifyContent="space-between" alignItems="center" boxShadow="0px 0px 1px 0px #ffffff">
            <Box cursor="pointer" onClick={e => history.push("/")}>
                <Text fontSize="3xl">GithubSquaadsNuwe</Text>
            </Box>
            <Flex>

                <Box px="10px" alignSelf="center" marginRight="1rem">
                    <Text fontWeight="semibold" fontSize="xl"><Link to="/home">Home</Link></Text>
                </Box>

                <Box px="10px" alignSelf="center" marginRight="1rem">
                    <Text fontWeight="semibold" fontSize="xl"><Link to="/about">About</Link></Text>
                </Box>

                <Box display="flex" px="10px" background="#491eff" borderRadius="3rem" padding="1.5rem" maxHeight="20px" alignItems="center">
                    <Text fontWeight="semibold" fontSize="xl"><Link to="/login">Login</Link></Text>
                </Box>

            </Flex>
        </Flex>
    )
}

export default DesktopNavbar