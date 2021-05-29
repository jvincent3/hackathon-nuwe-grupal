import React from 'react'
import {useHistory} from 'react-router-dom'
import {Grid, Box, Text, Button} from '@chakra-ui/react'

function UserNotFound() {

    const history = useHistory();

    return (
        <Grid height="calc(100vh - 200px)">
            <Box alignSelf="center">
                <Text textAlign="center" fontSize="3xl">User has not been found...</Text>
                <Box width="fit-content" mx="auto">
                    <Button 
                        mt={4}
                        colorScheme="teal"
                        onClick={e => history.push("/")}
                    >
                        Go to home
                    </Button>

                </Box>
            </Box>
        </Grid>
    )
}

export default UserNotFound
