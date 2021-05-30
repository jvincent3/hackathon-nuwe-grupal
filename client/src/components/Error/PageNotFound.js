import React from 'react'
import {Grid, Box, Button, Image, Text} from '@chakra-ui/react'
import {useHistory} from 'react-router-dom'

function PageNotFound() {

    const history = useHistory();

    return (
        <Grid height="calc(100vh - 200px)">
            <Box alignSelf="center" px="20px">
                <Box maxWidth="600px" mx="auto">
                    <Box mb="30px">
                        <Image src={require("assets/images/page_not_found.svg")?.default}/>
                    </Box>
                    <Text textAlign="center" fontSize={{base: "2xl", md:"3xl"}}>Page not been found...</Text>
                </Box>
                <Box width="fit-content" mx="auto">
                    <Button 
                        mt={4}
                        backgroundColor="#00BFA6"
                        onClick={e => history.push("/")}
                    >
                        Go to home
                    </Button>

                </Box>
            </Box>
        </Grid>
    )
}

export default PageNotFound;
