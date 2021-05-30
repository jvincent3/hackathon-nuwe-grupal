import React from 'react'
import {Grid, Box, Text, Image} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function Landing() {
    return (
        <Grid height="calc(100vh - 100px)" mx="auto" templateColumns={{base:"none",md:"repeat(2,1fr)"}}>
            
            <Box display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignSelf="center" 
            px="10px" 
            height="calc(100vh - 150px)" 
            marginLeft="2rem" 
            marginBottom="5rem"
            >
                    <Text fontWeight="extrabold" fontSize="6xl" width="container.md">The Future of GitHub</Text>
                    <Text fontWeight="light" fontSize="4xl">at present</Text>
                    
                    <Text marginTop="3rem" fontWeight="hairline" fontSize="3xl">
                            Our mission is to take the sharing of 
                            experiences and develop in teams to
                            the next level.
                    </Text>
            </Box>

            <Box display="flex" 
            alignItems="center" 
            px="10px" 
            height="calc(100vh - 150px)" 
            marginBottom="5rem" 
            mx="auto"
            maxWidth="800px"
            >

                <Image src={require("assets/images/landing.svg")?.default}/>
                
            </Box>    

        </Grid>
    )
}

export default Landing;