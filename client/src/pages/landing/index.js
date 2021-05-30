import React from 'react'
import {Grid, Box, Text} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function Landing() {
    return (
        <Grid height="calc(100vh - 100px)" mx="auto">
            <Box alignSelf="center" px="10px" height="calc(100vh - 150px)" >
                <Box py="20px">
                    {/* <Text textAlign="center" fontSize="3xl">Search a <Text as="span" fontWeight="semibold">Github</Text> user</Text> */}
                </Box>
            </Box>
        </Grid>
    )
}

export default Landing;