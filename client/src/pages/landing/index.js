import React from 'react'
import {Grid, Box, Text, Image, GridItem} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function Landing() {
    return (
        <Grid height="calc(100vh - 100px)" mx="auto" templateColumns={{base:"none",lg:"repeat(2,1fr)"}}>

            <GridItem
            colSpan="1"
            alignSelf="center" 
            px="10px"
            pt={{base: "150px", md:"none"}}
            marginLeft="2rem" 
            marginBottom="5rem"
            >
                    <Text fontWeight="extrabold" fontSize={{base:"3xl", md: "4xl" ,lg:"6xl"}}>The Future of GitHub</Text>
                    <Text fontWeight="light" fontSize={{base: "xl",md: "3xl", lg:"4xl"}}>at present</Text>
                    
                    <Text marginTop="3rem" fontWeight="hairline" fontSize={{base:"xl", md: "2xl", lg:"3xl"}}>
                            Our mission is to take the sharing of 
                            experiences and develop in teams to
                            the next level.
                    </Text>
            </GridItem>

            <GridItem
            colSpan="1"
            alignSelf="center" 
            px="20px" 
            marginBottom="5rem" 
            mx="auto"
            >
                <Image width="100%" src={require("assets/images/landing.svg")?.default}/>   
            </GridItem>    

        </Grid>
    )
}

export default Landing;