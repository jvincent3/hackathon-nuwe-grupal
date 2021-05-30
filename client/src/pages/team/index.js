import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import CreateTeam from './Modal/CreateTeam'

function Team() {
    return (
        <Box>
            <Box maxWidth="1000px" mx="auto">
                <Box>
                    <Text fontSize="6xl">Team page</Text>
                </Box>
                <Box mb="20px">
                    <CreateTeam/>
                </Box>
                <Box backgroundColor="#222a3a" borderRadius="5px" py="50px" px="20px">
                    <Text fontSize="3xl">No team has been found</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Team
