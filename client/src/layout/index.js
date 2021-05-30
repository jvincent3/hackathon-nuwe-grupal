import React from 'react'
import {Box} from '@chakra-ui/react'
import Navbar from 'components/Navbar'

function Layout({children}) {
    return (
        <Box>
            <Navbar/>
            {children}
        </Box>
    )
}

export default Layout
