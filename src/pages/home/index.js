import React from 'react'
import {Grid, Box, Heading} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function index() {
    return (
        <Grid height="calc(100vh - 100px)" maxWidth="600px" mx="auto">
            <Box alignSelf="center" px="10px">
                <Box py="20px">
                    <Heading textAlign="center">Search github user</Heading>
                </Box>
                <SearchGithubUser/>
            </Box>
        </Grid>
    )
}

export default index
