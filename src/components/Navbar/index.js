import React from 'react'
import {Link} from 'react-router-dom'
import {Flex, Box, Text} from '@chakra-ui/react' 


function Navbar() {
    return (
        <Flex minHeight="80px" p="20px" justifyContent="space-between" boxShadow="0px 0px 1px 0px #ffffff">
            <Box>
                <Text fontWeight="semibold" fontSize="2xl"><Link to="/">Home</Link></Text>
            </Box>
            <Flex>
                <Box px="10px">
                    <Text fontWeight="semibold" fontSize="2xl"><Link to="/login">Login</Link></Text>
                </Box>
                <Box px="10px">
                    <Text fontWeight="semibold" fontSize="2xl"><Link to="/register">Register</Link></Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar
