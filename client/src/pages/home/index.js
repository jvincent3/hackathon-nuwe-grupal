import React from 'react'
import {Grid, Box, Text} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function index() {
    return (
        <Grid height="calc(100vh - 100px)" maxWidth="600px" mx="auto">
            <Box alignSelf="center" px="10px">
                <Box py="20px">
                    <Text textAlign="center" fontSize="3xl">Search a <Text as="span" fontWeight="semibold">Github</Text> user</Text>
                </Box>
                <SearchGithubUser/>
            </Box>
        </Grid>
    )
}

export default index
