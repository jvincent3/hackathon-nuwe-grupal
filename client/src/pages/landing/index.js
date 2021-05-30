import React from 'react'
import {Grid, Box, Text, Image} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function Landing() {
    return (
        <Grid height="calc(100vh - 100px)" mx="auto">
            <Box display="flex" px="10px" height="calc(100vh - 150px)" marginLeft="5rem" marginBottom="5rem">
            
            <Box display="flex" flexDirection="column" justifyContent="center" alignSelf="center" px="10px" height="calc(100vh - 150px)" marginLeft="5rem" marginBottom="5rem">
                    <Text fontWeight="extrabold" fontSize="6xl" width="container.md">The Future</Text>
                    <Text fontWeight="extrabold" fontSize="6xl" width="container.md">of GitHub</Text>
                    <Text fontWeight="light" fontSize="4xl">at present</Text>
                    
                    <Text marginTop="3rem" fontWeight="hairline" fontSize="large">
                            Our mission is to take the sharing of 
                    </Text>
                    <Text fontWeight="hairline" fontSize="large">
                            experiences and develop in teams to
                    </Text>
                    <Text fontWeight="hairline" fontSize="large">
                            the next level.
                    </Text>
            </Box>

            <Box display="flex" alignItems="center" px="10px" height="calc(100vh - 150px)" marginLeft="5rem" marginBottom="5rem" marginRight="5rem">

                <Image src={require("assets/images/landing.svg")?.default}/>
                
            </Box>    

            </Box>
        </Grid>
    )
}

export default Landing;