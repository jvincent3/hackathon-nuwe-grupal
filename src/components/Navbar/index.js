import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Text} from '@chakra-ui/react' 


function Navbar() {
    return (
        <Box minHeight="80px" p="20px">
            <Text fontWeight="semibold" fontSize="2xl"><Link to="/">Home</Link></Text>
        </Box>
    )
}

export default Navbar
